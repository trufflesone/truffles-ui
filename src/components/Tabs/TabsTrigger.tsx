import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-10 py-2 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=inactive]:text-grey-600",
  {
    variants: {
      variant: {
        primary:
          "rounded-md data-[state=active]:bg-white data-[state=active]:text-grey-900 data-[state=active]:shadow",
        secondary:
          "data-[state=active]:border-b-2 data-[state=active]:border-grey-900 border-b-[1px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  { variant?: "primary" | "secondary" } & React.ComponentPropsWithoutRef<
    typeof TabsPrimitive.Trigger
  >
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant, className }))}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export default TabsTrigger;
