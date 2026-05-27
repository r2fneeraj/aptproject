import { cn } from "../../lib/utils"

const Badge = ({ children, variant = "default", className }) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "text-foreground border border-border hover:bg-accent hover:text-accent-foreground",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    success: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200",
    warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200",
  }

  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}

export { Badge }
