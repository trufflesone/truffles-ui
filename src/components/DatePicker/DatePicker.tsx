import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Calendar,
  Button,
} from "../../components";
import { SelectSingleEventHandler } from "react-day-picker";

export interface DatePickerProps {
  value: Date;
  onChange: SelectSingleEventHandler;
  placeholder?: string;
  mode?: "single" | "default";
  className?: string;
  captionLayout?: "buttons" | "dropdown-buttons" | "dropdown";
  fromYear?: number;
  toYear?: number;
  disabled?: boolean;
}

const DatePicker = ({
  value,
  onChange,
  placeholder = "Pick a date",
  mode = "default",
  captionLayout,
  fromYear,
  toYear,
  className,
  disabled,
  ...props
}: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "w-full border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground justify-between text-left font-normal",
            !value && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          {value ? (
            <span>{format(value, "PPP")}</span>
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode={mode}
          selected={value}
          onSelect={onChange}
          captionLayout={captionLayout}
          fromYear={fromYear}
          toYear={toYear}
          initialFocus
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
