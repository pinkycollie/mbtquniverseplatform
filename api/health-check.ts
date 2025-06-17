import { type NextRequest, NextResponse } from "next/server"

export const config = {
  runtime: "edge",
}

interface HealthStatus {
  service: string
  status: "healthy" | "unhealthy" | "degraded"
  responseTime: number
  version: string
  lastUpdated: string
  deafFirstFeatures: {
    signLanguageAuth: boolean
    visualAlerts: boolean
    offlineSync: boolean
    accessibilityOptimized: boolean
  }
}

export default async function handler(req: NextRequest) {
  const startTime = Date.now()

  try {
    const healthStatuses: HealthStatus[] = []

    // Define all magician services
    const magicians = [
      { name: "auth-magician", url: "https://auth.360magicians.com" },
      { name: "sync-magician", url: "https://sync.360magicians.com" },
      { name: "neural-magician", url: "https://neural.360magicians.com" },
      { name: "business-magician", url: "https://business.360magicians.com" },
      { name: "job-magician", url: "https://jobs.360magicians.com" },
      { name: "community-magician", url: "https://community.360magicians.com" },
    ]

    // Check each magician's health
    const healthChecks = magicians.map(async (magician) => {
      const checkStart = Date.now()

      try {
        const response = await fetch(`${magician.url}/health`, {
          method: "GET",
          headers: {
            "User-Agent": "360-Magicians-Health-Check/2.0",
            "X-Health-Check": "true",
          },
          signal: AbortSignal.timeout(5000), // 5 second timeout
        })

        const responseTime = Date.now() - checkStart

        if (response.ok) {
          const healthData = await response.json()

          return {
            service: magician.name,
            status: "healthy" as const,
            responseTime,
            version: healthData.version || "2.0.0",
            lastUpdated: healthData.timestamp || new Date().toISOString(),
            deafFirstFeatures: {
              signLanguageAuth: healthData.features?.signLanguageAuth ?? true,
              visualAlerts: healthData.features?.visualAlerts ?? true,
              offlineSync: healthData.features?.offlineSync ?? true,
              accessibilityOptimized: healthData.features?.accessibilityOptimized ?? true,
            },
          }
        } else {
          return {
            service: magician.name,
            status: "unhealthy" as const,
            responseTime,
            version: "unknown",
            lastUpdated: new Date().toISOString(),
            deafFirstFeatures: {
              signLanguageAuth: false,
              visualAlerts: false,
              offlineSync: false,
              accessibilityOptimized: false,
            },
          }
        }
      } catch (error) {
        return {
          service: magician.name,
          status: "unhealthy" as const,
          responseTime: Date.now() - checkStart,
          version: "unknown",
          lastUpdated: new Date().toISOString(),
          deafFirstFeatures: {
            signLanguageAuth: false,
            visualAlerts: false,
            offlineSync: false,
            accessibilityOptimized: false,
          },
        }
      }
    })

    const results = await Promise.all(healthChecks)
    healthStatuses.push(...results)

    // Calculate overall platform health
    const healthyServices = healthStatuses.filter((s) => s.status === "healthy").length
    const totalServices = healthStatuses.length
    const healthPercentage = (healthyServices / totalServices) * 100

    let overallStatus: "healthy" | "degraded" | "unhealthy"
    if (healthPercentage === 100) {
      overallStatus = "healthy"
    } else if (healthPercentage >= 80) {
      overallStatus = "degraded"
    } else {
      overallStatus = "unhealthy"
    }

    const totalResponseTime = Date.now() - startTime

    // Check deaf-first features across platform
    const deafFirstStatus = {
      signLanguageAuthAvailable: healthStatuses.some((s) => s.deafFirstFeatures.signLanguageAuth),
      visualAlertsEnabled: healthStatuses.every((s) => s.deafFirstFeatures.visualAlerts),
      offlineSyncWorking: healthStatuses.some((s) => s.deafFirstFeatures.offlineSync),
      accessibilityOptimized: healthStatuses.every((s) => s.deafFirstFeatures.accessibilityOptimized),
    }

    const response = {
      platform: "360 Magicians Platform",
      version: "2.0.0",
      status: overallStatus,
      timestamp: new Date().toISOString(),
      responseTime: totalResponseTime,
      health: {
        overall: `${healthyServices}/${totalServices} services healthy`,
        percentage: healthPercentage,
        services: healthStatuses,
      },
      deafFirst: {
        status: Object.values(deafFirstStatus).every(Boolean) ? "fully_optimized" : "partially_optimized",
        features: deafFirstStatus,
      },
      magicians: {
        total: totalServices,
        healthy: healthyServices,
        unhealthy: totalServices - healthyServices,
      },
      uptime: process.uptime ? `${Math.floor(process.uptime())}s` : "unknown",
      lastUpdated: new Date().toISOString(),
    }

    // Set appropriate status code
    const statusCode = overallStatus === "healthy" ? 200 : overallStatus === "degraded" ? 207 : 503

    return NextResponse.json(response, {
      status: statusCode,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "X-Platform-Status": overallStatus,
        "X-Deaf-First-Optimized": deafFirstStatus.accessibilityOptimized ? "true" : "false",
      },
    })
  } catch (error) {
    console.error("Health check failed:", error)

    return NextResponse.json(
      {
        platform: "360 Magicians Platform",
        status: "unhealthy",
        error: "Health check system failure",
        timestamp: new Date().toISOString(),
        responseTime: Date.now() - startTime,
      },
      { status: 503 },
    )
  }
}
