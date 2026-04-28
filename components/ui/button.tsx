import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-600 text-sm transition-[transform,box-shadow,opacity] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-forest text-white shadow-forest hover:bg-forest-light hover:shadow-card-hover active:scale-[0.98] rounded-md",
        amber:
          "bg-amber text-white shadow-amber hover:bg-amber-light hover:shadow-amber-hover active:scale-[0.98] rounded-md font-semibold",
        outline:
          "border-2 border-forest text-forest bg-transparent hover:bg-forest hover:text-white active:scale-[0.98] rounded-md",
        ghost:
          "text-charcoal hover:bg-cream-dark active:scale-[0.98] rounded-md",
        link: "text-forest underline-offset-4 hover:underline p-0 h-auto",
        "outline-amber":
          "border-2 border-amber text-amber bg-transparent hover:bg-amber hover:text-white active:scale-[0.98] rounded-md",
        forest:
          "bg-forest text-white shadow-forest hover:bg-forest-light hover:shadow-card-hover active:scale-[0.98] rounded-md",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-13 px-8 py-3 text-base",
        xl: "h-14 px-10 py-3.5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
