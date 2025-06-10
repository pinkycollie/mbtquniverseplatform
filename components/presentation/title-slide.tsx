import Slide from "./slide"
import { cn } from "@/lib/utils"

interface TitleSlideProps {
  title: string
  subtitle?: string
  presenter?: string
  date?: string
  className?: string
  background?: string
}

export default function TitleSlide({
  title,
  subtitle,
  presenter,
  date,
  className,
  background = "bg-gradient-to-br from-purple-600 to-blue-600",
}: TitleSlideProps) {
  return (
    <Slide className={cn("flex flex-col items-center justify-center text-white", className)} background={background}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl mb-8 opacity-90">{subtitle}</p>}
        {presenter && <p className="text-lg mt-16">{presenter}</p>}
        {date && <p className="text-sm opacity-75 mt-2">{date}</p>}
      </div>
    </Slide>
  )
}
