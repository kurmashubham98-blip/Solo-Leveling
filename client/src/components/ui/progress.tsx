import * as React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  variant?: "default" | "success" | "danger" | "warning";
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, variant = "default", ...props }, ref) => {
    // Map variants to specific classes
    const colorClasses = {
        default: "bg-primary shadow-glow-blue",
        success: "bg-success shadow-glow-green",
        danger: "bg-danger", // No custom glow for red yet, using default color
        warning: "bg-warning",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-2 w-full overflow-hidden rounded-full bg-muted",
          className
        )}
        {...props}
      >
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={cn("h-full w-full flex-1 transition-all", colorClasses[variant])}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress };