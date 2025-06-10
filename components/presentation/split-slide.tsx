import type React from "react"
import Slide from "./slide"
import { cn } from "@/lib/utils"

interface SplitSlideProps {
  title: string
  left: React.ReactNode
  right: React.ReactNode
  className?: string
  background?: string
}

export default function SplitSlide({ title, left, right, className, background }: SplitSlideProps) {
  return (
    <Slide className={cn("", className)} background={background}>
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </Slide>
  )
}
