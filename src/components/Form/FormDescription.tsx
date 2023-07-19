import * as React from "react";

import { cn } from "../../lib/utils";
import useFormField from "./useFormField";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn(
        "text-[0.8rem] text-neutral-500 dark:text-neutral-400",
        className
      )}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

export default FormDescription;
