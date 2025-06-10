import { type NextRequest, NextResponse } from "next/server"
import { updateCheckpointProgress, sendProgressNotification } from "./utils" // Assuming these functions are declared in a utils file

// Called by job board APIs when applications are submitted or interviews are scheduled
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const { userId, applicationData, eventType } = payload

    switch (eventType) {
      case "application_submitted":
        await updateJobApplicationProgress(userId, applicationData)
        break

      case "interview_scheduled":
        await updateInterviewProgress(userId, applicationData)
        break

      case "job_offer_received":
        await completeJobPlacementCheckpoint(userId, applicationData)
        break
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Job webhook error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}

async function updateJobApplicationProgress(userId: string, applicationData: any) {
  // Track job applications and update progress
  await updateCheckpointProgress(userId, "job-app-followup", {
    status: "in-progress",
    completionPercentage: 50,
    metadata: {
      applicationsSubmitted: applicationData.totalApplications,
      lastApplicationDate: applicationData.submittedAt,
    },
  })
}

async function updateInterviewProgress(userId: string, applicationData: any) {
  // Update when interviews are scheduled
  await updateCheckpointProgress(userId, "job-app-followup", {
    status: "in-progress",
    completionPercentage: 75,
    metadata: {
      interviewsScheduled: applicationData.interviewCount,
      nextInterviewDate: applicationData.interviewDate,
    },
  })
}

async function completeJobPlacementCheckpoint(userId: string, applicationData: any) {
  // Complete the entire job placement journey
  await updateCheckpointProgress(userId, "job-app-followup", {
    status: "completed",
    completionPercentage: 100,
    completedAt: new Date(),
    automatedBy: "job-board-api",
    jobData: {
      company: applicationData.company,
      position: applicationData.position,
      salary: applicationData.salary,
      startDate: applicationData.startDate,
    },
  })

  await sendProgressNotification(userId, {
    type: "journey_completed",
    message: `Congratulations! You've successfully completed your job search journey and received an offer from ${applicationData.company}!`,
  })
}
