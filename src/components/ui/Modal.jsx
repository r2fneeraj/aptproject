import { cn } from "../../lib/utils"
import { X } from "lucide-react"

const Modal = ({ isOpen, onClose, title, children, className }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
      <div 
        className={cn(
          "bg-background rounded-lg border border-border shadow-xl w-full max-w-md animate-in zoom-in-95 duration-200 overflow-hidden",
          className
        )}
      >
        <div className="flex items-center justify-between p-4 border-b bg-card">
          <h2 className="text-lg font-semibold text-primary">{title}</h2>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-accent"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export { Modal }
