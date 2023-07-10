import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

export interface SideNavProps extends React.HTMLAttributes<HTMLDivElement> {}

const SideNav = React.forwardRef<HTMLDivElement, SideNavProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <aside
        {...props}
        ref={ref}
        className={cn("p-8 bg-white w-max h-full shadow-md", className)}
      >
        {children}
      </aside>
    );
  }
);
SideNav.displayName = "SideNav";

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

const sideNavItemVariants = cva(
  "p-5 py-3 rounded-lg text-grey-900 cursor-pointer flex items-center space-x-4 whitespace-nowrap font-semibold active:bg-primary-50 active:text-primary-500",
  {
    variants: {
      active: {
        true: "bg-primary-50 text-primary-500",
        false: "hover:bg-grey-100",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

const SideNavItem = React.forwardRef<
  HTMLLIElement,
  {
    icon?: React.ReactNode;
    active?: boolean;
  } & React.HTMLAttributes<HTMLLIElement>
>(({ children, className, icon, active, ...props }, ref) => {
  return (
    <li
      {...props}
      ref={ref}
      className={cn(sideNavItemVariants({ active }), className)}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <span>{children}</span>
    </li>
  );
});
SideNavItem.displayName = "SideNavItem";

export { SideNavList, SideNavItem };
export default SideNav;
