import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Textarea } from "../components";

export default {
  title: "Components/Textarea",
  component: Textarea,
} as Meta<typeof Textarea>;

const Template: StoryFn<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "This is a placeholder",
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  placeholder: "This is a placeholder",
  helperText: "This is a helper text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "This is a placeholder",
  helperText: "This is a helper text",
  disabled: true,
};
