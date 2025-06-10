import { type NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"

// This would be called by Northwest Agent API when business registration is complete
export async function POST(request: NextRequest) {
  try {
    const headersList = headers()
    const signature = headersList.get("x-webhook-signature")

    // Verify webhook signature for security
    if (!verifyWebhookSignature(signature, await request.text())) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
    }

    const payload = await request.json()

    // Extract user and business registration data
    const { userId, businessData, status } = payload

    if (status === "completed") {
      // Automatically mark the "Structure & Legal" checkpoint as complete
      await updateCheckpointProgress(userId, "structure-legal", {
        status: "completed",
        completionPercentage: 100,
        completedAt: new Date(),
        automatedBy: "northwest-agent-api",
        businessData: {
          ein: businessData.ein,
          businessName: businessData.name,
          registrationDate: businessData.registrationDate,
        },
      })

      // Trigger next checkpoint activation
      await activateNextCheckpoint(userId, "financial-setup")

      // Send notification to user
      await sendProgressNotification(userId, {
        type: "checkpoint_completed",
        checkpoint: "structure-legal",
        message:
          "Great news! Your business registration is complete. Your EIN is ready and your next step is financial setup.",
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}

async function updateCheckpointProgress(userId: string, checkpointId: string, updateData: any) {
  // Update database with new checkpoint status
  // This would integrate with your database (MongoDB, PostgreSQL, etc.)
  console.log(`Updating checkpoint ${checkpointId} for user ${userId}:`, updateData)
}

async function activateNextCheckpoint(userId: string, nextCheckpointId: string) {
  // Automatically unlock and activate the next logical checkpoint
  console.log(`Activating next checkpoint ${nextCheckpointId} for user ${userId}`)
}

async function sendProgressNotification(userId: string, notification: any) {
  // Send real-time notification via WebSocket, email, or push notification
  console.log(`Sending notification to user ${userId}:`, notification)
}

function verifyWebhookSignature(signature: string | null, payload: string): boolean {
  // Implement webhook signature verification for security
  return true // Simplified for demo
}
