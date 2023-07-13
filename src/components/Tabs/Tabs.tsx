"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root;

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

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { TabsList, TabsTrigger, TabsContent };
export default Tabs;
