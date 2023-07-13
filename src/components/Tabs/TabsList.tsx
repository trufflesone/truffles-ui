import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const tabsListVariants = cva(
  "inline-flex h-12 items-center justify-center p-1",
  {
    variants: {
      variant: {
        primary: "bg-grey-100 rounded-md",
        secondary: "",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  { variant?: "primary" | "secondary" } & React.ComponentPropsWithoutRef<
    typeof TabsPrimitive.List
  >
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, className }))}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export default TabsList;
