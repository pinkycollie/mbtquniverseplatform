import { type NextRequest, NextResponse } from "next/server"
import { updateCheckpointProgress, sendProgressNotification } from "./utils" // Assuming these functions are declared in a utils file

// Called by banking partner API when business account is opened
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const { userId, accountData, status } = payload

    if (status === "account_opened") {
      // Update financial setup checkpoint
      await updateCheckpointProgress(userId, "financial-setup", {
        status: "completed",
        completionPercentage: 100,
        completedAt: new Date(),
        automatedBy: "banking-partner-api",
        accountData: {
          accountNumber: accountData.maskedAccountNumber,
          routingNumber: accountData.routingNumber,
          accountType: accountData.type,
        },
      })

      // Calculate overall phase progress
      await updatePhaseProgress(userId, "build", 75) // Both structure and financial are now done

      // Unlock growth phase checkpoints
      await unlockPhaseCheckpoints(userId, "grow")

      await sendProgressNotification(userId, {
        type: "checkpoint_completed",
        checkpoint: "financial-setup",
        message: "Your business bank account is now active! You're ready to start growing your business.",
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Bank webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}

async function updatePhaseProgress(userId: string, phaseId: string, percentage: number) {
  console.log(`Updating phase ${phaseId} progress to ${percentage}% for user ${userId}`)
}

async function unlockPhaseCheckpoints(userId: string, phaseId: string) {
  console.log(`Unlocking ${phaseId} phase checkpoints for user ${userId}`)
}
