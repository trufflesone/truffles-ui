import * as React from "react";

import { cn } from "../../lib/utils";

const SideNavList = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ children, className, ...props }, ref) => {
  return (
    <ul {...props} ref={ref} className={cn("space-y-4", className)}>
      {children}
    </ul>
  );
});
SideNavList.displayName = "SideNavList";

export default SideNavList;
