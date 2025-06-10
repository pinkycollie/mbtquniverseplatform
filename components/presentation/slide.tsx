import type React from "react"
import { cn } from "@/lib/utils"

interface SlideProps {
  children: React.ReactNode
  className?: string
  background?: string
}

export default function Slide({ children, className, background = "bg-background" }: SlideProps) {
  return (
    <div
      className={cn(
        "w-full max-w-5xl h-full max-h-[80vh] overflow-y-auto p-8 rounded-lg shadow-lg",
        background,
        className,
      )}
    >
      {children}
    </div>
  )
}
