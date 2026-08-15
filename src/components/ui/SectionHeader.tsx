import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, className, centered = true }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-3 mb-8 md:mb-12", centered && "items-center text-center", className)}>
      <h2 className="text-[28px] md:text-[40px] font-extrabold leading-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[15px] md:text-base text-white/50 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
