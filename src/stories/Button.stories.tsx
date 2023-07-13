import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BsArrowRight, BsFillCartPlusFill } from "react-icons/bs";

import { Button } from "../components";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Button",
  disabled: true,
};

export const Icon = Template.bind({});
Icon.args = {
  children: "Button",
  leftIcon: <BsFillCartPlusFill />,
  rightIcon: <BsArrowRight />,
};
