import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Checkbox } from "../components";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { checked: true, disabled: true };
