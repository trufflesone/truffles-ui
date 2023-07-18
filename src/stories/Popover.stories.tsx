import React from "react";
import { StoryFn, Meta, StoryObj } from "@storybook/react";

import { Popover, PopoverContent, PopoverTrigger } from "../components";

export default {
  title: "Components/Popover",
  component: Popover,
} as Meta<typeof Popover>;

const Template: StoryFn<typeof Popover> = (args) => <Popover {...args} />;

type Story = StoryObj<typeof Template>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  ),
};
