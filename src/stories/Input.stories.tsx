import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Input } from "../components";

export default {
  title: "Components/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "This is a text input",
};

export const WithInfoText = Template.bind({});
WithInfoText.args = {
  type: "text",
  placeholder: "This is a text input",
  infoText: "This is an info text",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  type: "text",
  placeholder: "This is a text input",
  helperText: "This is a helper text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "text",
  placeholder: "This is a text input",
  infoText: "This is an info text",
  helperText: "This is a helper text",
  disabled: true,
};
