import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { DatePicker } from "../components";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  argTypes: {
    onSelect: { action: "selected" },
  },
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  mode: "single",
  value: new Date(),
};

export const WithYearMonthDropdown = Template.bind({});
WithYearMonthDropdown.args = {
  mode: "default",
  value: new Date(),
  captionLayout: "dropdown-buttons",
  fromYear: 1900,
  toYear: 2100,
};
