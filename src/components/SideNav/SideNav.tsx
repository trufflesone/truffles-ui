import * as React from "react";

import { cn } from "../../lib/utils";

const SideNav = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <aside
      {...props}
      ref={ref}
      className={cn("p-8 bg-white w-max h-full shadow-md", className)}
    >
      {children}
    </aside>
  );
});
SideNav.displayName = "SideNav";

export default SideNav;
