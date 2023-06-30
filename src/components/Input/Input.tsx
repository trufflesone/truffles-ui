import * as React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

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
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, infoText, helperText, ...props }, ref) => {
    return (
      <React.Fragment>
        <div className="flex justify-end items-center relative">
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md border border-grey-100 bg-white px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:bg-grey-50 disabled:placeholder:text-grey-300 dark:border-neutral-800 dark:bg-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-800",
              className
            )}
            ref={ref}
            {...props}
          />
          {type === "text" && infoText && infoText.trim().length > 0 && (
            <div className="absolute mr-2 text-grey-600">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <AiOutlineQuestionCircle
                      aria-label="Info"
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
