import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "../Button/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const IconLeft = () => <ChevronLeft className="h-4 w-4" />;
const IconRight = () => <ChevronRight className="h-4 w-4" />;
const Dropdown = ({ ...props }) => {
  const handleCalendarChange = (
    value: string,
    e: React.ChangeEventHandler<HTMLSelectElement>
  ) => {
    const event = {
      target: {
        value: value,
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    e(event);
  };

  return (
    <Select
      {...props}
      onValueChange={(value) => handleCalendarChange(value, props.onChange)}
    >
      <SelectTrigger>
        <SelectValue placeholder={props.caption} />
      </SelectTrigger>
      <SelectContent className="max-h-56 overflow-auto">
        {React.Children.map(props.children, (child) => (
          <SelectItem value={child.props.value}>
            {child.props.children}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center gap-2",
        caption_label: "flex text-sm font-medium justify-center grow",
        caption_dropdowns: "flex justify-center gap-1 grow dropdowns",
        vhidden: "hidden",
        nav: "flex items-center [&:has([name='previous-month'])]:order-first [&:has([name='next-month'])]:order-last",
        nav_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: cn({ "absolute left-1": props.mode === "single" }),
        nav_button_next: cn({ "absolute right-1": props.mode === "single" }),
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100 cursor-pointer"
        ),
        day_selected:
          "bg-primary-500 text-background hover:bg-primary-500 hover:text-background focus:bg-primary-500 focus:text-background",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft,
        IconRight,
        Dropdown,
      }}
      {...props}
    />
  );
};
Calendar.displayName = "Calendar";

export default Calendar;
