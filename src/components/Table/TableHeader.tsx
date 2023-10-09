import * as React from "react";

import { cn } from "../../lib/utils";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("[&_tr]:border-b bg-grey-50", className)}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

export default TableHeader;
