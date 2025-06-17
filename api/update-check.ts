import { type NextRequest, NextResponse } from "next/server"
import { exec } from "child_process"
import { promisify } from "util"

const execAsync = promisify(exec)

export const config = {
  runtime: "nodejs",
  maxDuration: 300, // 5 minutes
}

interface UpdateStatus {
  service: string
  currentVersion: string
  latestVersion: string
  needsUpdate: boolean
  lastChecked: string
}

export default async function handler(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
  }

  try {
    const updateStatuses: UpdateStatus[] = []

    // Check each magician service for updates
    const services = [
      "auth-magician",
      "sync-magician",
      "neural-magician",
      "business-magician",
      "job-magician",
      "community-magician",
    ]

    for (const service of services) {
      try {
        // Check service health and version
        const healthResponse = await fetch(`https://${service.replace("-magician", "")}.360magicians.com/health`)
        const healthData = await healthResponse.json()

        const currentVersion = healthData.version || "1.0.0"

        // Check for latest version (this would typically check a registry or GitHub releases)
        const latestVersion = await getLatestVersion(service)

        updateStatuses.push({
          service,
          currentVersion,
          latestVersion,
          needsUpdate: currentVersion !== latestVersion,
          lastChecked: new Date().toISOString(),
        })
      } catch (error) {
        console.error(`Error checking ${service}:`, error)
        updateStatuses.push({
          service,
          currentVersion: "unknown",
          latestVersion: "unknown",
          needsUpdate: false,
          lastChecked: new Date().toISOString(),
        })
      }
    }

    // Check if any updates are needed
    const updatesNeeded = updateStatuses.filter((status) => status.needsUpdate)

    if (updatesNeeded.length > 0) {
      // Trigger update workflow
      await triggerUpdateWorkflow(updatesNeeded)

      return NextResponse.json({
        status: "updates_triggered",
        message: `${updatesNeeded.length} services need updates`,
        updates: updatesNeeded,
        timestamp: new Date().toISOString(),
      })
    }

    return NextResponse.json({
      status: "up_to_date",
      message: "All magicians are up to date",
      services: updateStatuses,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Update check failed:", error)
    return NextResponse.json(
      {
        error: "Update check failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

async function getLatestVersion(service: string): Promise<string> {
  try {
    // This would typically check GitHub releases, Docker registry, or package registry
    // For now, we'll simulate checking for updates
    const response = await fetch(`https://api.github.com/repos/360magicians/${service}/releases/latest`)

    if (response.ok) {
      const release = await response.json()
      return release.tag_name || "1.0.0"
    }

    return "1.0.0"
  } catch (error) {
    console.error(`Error getting latest version for ${service}:`, error)
    return "1.0.0"
  }
}

async function triggerUpdateWorkflow(updates: UpdateStatus[]): Promise<void> {
  try {
    // Trigger GitHub Actions workflow for updates
    const response = await fetch(
      "https://api.github.com/repos/360magicians/platform/actions/workflows/auto-update.yml/dispatches",
      {
        method: "POST",
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ref: "main",
          inputs: {
            services: updates.map((u) => u.service).join(","),
            reason: "Automated update check detected new versions",
          },
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`Failed to trigger update workflow: ${response.statusText}`)
    }

    console.log("Update workflow triggered successfully")
  } catch (error) {
    console.error("Failed to trigger update workflow:", error)
    throw error
  }
}
