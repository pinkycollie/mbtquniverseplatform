"use client"

import type React from "react"

interface ToolkitLayoutProps {
  children: React.ReactNode
}

export default function ToolkitLayout({ children }: ToolkitLayoutProps) {
  return (
    <div className="w-full bg-white">
      <div className="bg-[#FFBF00] py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-black">Business Toolkit</h1>
          <p className="text-black mt-2">Interactive resources to help you develop, launch, and grow your business</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8">{children}</div>
    </div>
  )
}
