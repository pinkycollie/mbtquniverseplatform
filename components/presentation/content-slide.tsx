import type React from "react"
import Slide from "./slide"
import { cn } from "@/lib/utils"

interface ContentSlideProps {
  title: string
  children: React.ReactNode
  className?: string
  background?: string
}

export default function ContentSlide({ title, children, className, background }: ContentSlideProps) {
  return (
    <Slide className={cn("", className)} background={background}>
      <h2 className="text-2xl font-bold mb-6 pb-2 border-b">{title}</h2>
      <div className="mt-4">{children}</div>
    </Slide>
  )
}
