import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "../../lib/utils";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    hideDivider?: boolean;
  }
>(({ className, hideDivider = false, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(!hideDivider && "border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
