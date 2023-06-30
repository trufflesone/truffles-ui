import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Label from "./Label";

export default {
  title: "Components/Label",
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: "This is a Label",
};
