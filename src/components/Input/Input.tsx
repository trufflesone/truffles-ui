import * as React from "react";
import { HelpCircle } from "lucide-react";

import { cn } from "../../lib/utils";
import Tooltip, {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Tooltip/Tooltip";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  infoText?: string;
  helperText?: string;
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "search"
    | "file"
    | "date"
    | "datetime-local"
    | "hidden"
    | "tel"
    | "url"
    | "week"
    | "month"
    | "time"
    | "reset"
    | "submit";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, infoText, helperText, ...props }, ref) => {
    const allowedTypes = [
      "text",
      "password",
      "email",
      "number",
      "file",
      "tel",
      "url",
    ];

    return (
      <React.Fragment>
        <div className="flex justify-end items-center relative">
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-white px-3 py-2 ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-grey-50 disabled:placeholder:text-grey-300 dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-primary-800",
              className
            )}
            ref={ref}
            {...props}
          />
          {allowedTypes.includes(type) &&
            infoText &&
            infoText.trim().length > 0 && (
              <div className="absolute mr-2 mt-1 text-muted-foreground ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle
                        aria-label="Info"
                        size={18}
                        className="cursor-help"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{infoText}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}
        </div>
        {helperText && helperText.trim().length > 0 && (
          <p className="text-sm text-grey-600">{helperText}</p>
        )}
      </React.Fragment>
    );
  }
);
Input.displayName = "Input";

export default Input;
