import React from "react";
import { StoryFn, Meta, StoryObj } from "@storybook/react";

import Select, {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/Select/Select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args: any) => <Select {...args} />;

type Story = StoryObj<typeof Template>;

export const Default: Story = {
  render: (args: any) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: (args: any) => (
    <Select {...args} disabled>
      <SelectTrigger>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  ),
};
