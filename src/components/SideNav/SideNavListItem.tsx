import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const sideNavListItemVariants = cva(
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

const SideNavListItem = React.forwardRef<
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
      className={cn(sideNavListItemVariants({ active }), className)}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <span>{children}</span>
    </li>
  );
});
SideNavListItem.displayName = "SideNavItem";

export default SideNavListItem;
