import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Calendar } from "../components";
import { addDays } from "date-fns";

export default {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    onSelect: { action: "selected" },
  },
} as Meta<typeof Calendar>;

const Template: StoryFn<typeof Calendar> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  mode: "single",
  selected: new Date(),
  className: "rounded-md max-w-max border",
};

export const WithYearMonthDropdown = Template.bind({});
WithYearMonthDropdown.args = {
  mode: "default",
  selected: new Date(),
  className: "rounded-md max-w-max border",
  captionLayout: "dropdown-buttons",
  fromYear: 1900,
  toYear: 2100,
};

export const Range = Template.bind({});
Range.args = {
  mode: "range",
  selected: {
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  },
  className: "rounded-md max-w-max border",
  captionLayout: "dropdown-buttons",
  fromYear: 1900,
  toYear: 2100,
  numberOfMonths: 2,
};
