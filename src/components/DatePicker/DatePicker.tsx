import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DayPickerProps } from "react-day-picker";

import { cn } from "../../lib/utils";
import { Calendar } from "../Calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { Button } from "../Button";

export type DatePickerProps = DayPickerProps & {
  placeholder?: string;
  disabled?: boolean;
};

const DatePicker = ({
  placeholder = "Pick a date",
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
            !props.selected && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          {props.selected ? (
            <span>{format(props.selected as Date, "PPP")}</span>
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar {...props} />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
