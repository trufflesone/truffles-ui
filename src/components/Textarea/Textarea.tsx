import * as React from "react";

import { cn } from "../../lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, helperText, ...props }, ref) => {
    return (
      <React.Fragment>
        <textarea
          className={cn(
            "flex min-h-[60px] w-full rounded-md border border-grey-100 bg-transparent px-3 py-2 shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-grey-50 disabled:placeholder:text-grey-300",
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && helperText.trim().length > 0 && (
          <p className="text-sm text-grey-600">{helperText}</p>
        )}
      </React.Fragment>
    );
  }
);
Textarea.displayName = "Textarea";

export default Textarea;
