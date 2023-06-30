import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-md text-sm transition-colors disabled:bg-grey-50 disabled:text-grey-300 disabled:pointer-events-none disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white shadow hover:bg-primary-700",
        info: "bg-info-500 text-white shadow hover:bg-info-700",
        success: "bg-success-500 text-white shadow hover:bg-success-700",
        alert: "bg-alert-500 text-white shadow hover:bg-alert-700",
        destructive:
          "bg-destructive-500 text-white shadow hover:bg-destructive-700",
        outline:
          "border border-primary-100 bg-primary-50 shadow-sm hover:bg-accent hover:text-accent-black",
        ghost: "hover:bg-accent hover:text-accent-white",
        link: "text-primary-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <span className="mr-2 -ml-1" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {props.children}
        {rightIcon && (
          <span className="ml-2 -mr-1" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
export default Button;
