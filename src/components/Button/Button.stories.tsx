import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "./Button";
import { BsArrowRight, BsFillCartPlusFill } from "react-icons/bs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NormalButton.args = {
  children: "Button",
};

export const IconButton = Template.bind({});

IconButton.args = {
  children: "Button",
  leftIcon: <BsFillCartPlusFill />,
  rightIcon: <BsArrowRight />,
};
