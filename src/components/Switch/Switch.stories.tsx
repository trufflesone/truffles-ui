import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Switch from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { checked: true, disabled: true };
