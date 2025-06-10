"use client"

import React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SlideDeckProps {
  children: React.ReactNode
  className?: string
}

export default function SlideDeck({ children, className }: SlideDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const [slides, setSlides] = useState<React.ReactNode[]>([])

  useEffect(() => {
    // Extract slides from children
    const slideArray = React.Children.toArray(children)
    setSlides(slideArray)
    setTotalSlides(slideArray.length)
  }, [children])

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextSlide()
    } else if (e.key === "ArrowLeft") {
      prevSlide()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentSlide, totalSlides])

  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-background", className)}>
      <div className="absolute inset-0 flex items-center justify-center">{slides[currentSlide]}</div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              currentSlide === index ? "bg-primary w-4" : "bg-muted",
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-4 right-4">
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-4 right-4 text-sm text-muted-foreground">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  )
}
