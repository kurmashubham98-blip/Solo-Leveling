import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-heading tracking-wider uppercase border",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-background shadow-glow-blue",
        secondary: "border-transparent bg-secondary text-white shadow-glow-violet",
        outline: "text-foreground",
        rankE: "border-white/50 text-white bg-white/10",
        rankD: "border-blue-400/50 text-blue-400 bg-blue-400/10",
        rankC: "border-green-400/50 text-green-400 bg-green-400/10",
        rankB: "border-yellow-400/50 text-yellow-400 bg-yellow-400/10",
        rankA: "border-orange-500/50 text-orange-500 bg-orange-500/10",
        rankS: "border-primary text-primary bg-primary/10 shadow-glow-blue",
        rankNational: "border-secondary text-secondary bg-secondary/10 shadow-glow-violet",
      },
      size: {
        default: "",
        lg: "px-4 py-1 text-sm border-2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
