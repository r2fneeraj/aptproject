import { cn } from "../../lib/utils"

const ProgressBar = ({ value = 0, max = 100, className, variant = "primary" }) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  
  const variants = {
    primary: "bg-primary",
    success: "bg-green-500",
    warning: "bg-amber-500",
    destructive: "bg-destructive",
  }

  return (
    <div className={cn("h-2 w-full bg-secondary rounded-full overflow-hidden", className)}>
      <div 
        className={cn("h-full transition-all duration-300 ease-in-out", variants[variant])} 
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export { ProgressBar }
