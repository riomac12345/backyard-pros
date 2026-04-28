import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-forest/10 text-forest border border-forest/20",
        forest: "bg-forest text-white",
        amber: "bg-amber/10 text-amber-dark border border-amber/20",
        "amber-solid": "bg-amber text-white",
        secondary: "bg-cream-dark text-charcoal-light border border-cream-deeper",
        outline: "border border-cream-deeper text-charcoal-muted",
        certified: "bg-forest text-white font-semibold",
        condition: "bg-amber/15 text-amber-dark border border-amber/25 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
