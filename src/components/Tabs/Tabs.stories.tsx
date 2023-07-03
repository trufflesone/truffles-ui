import React from "react";
import { StoryFn, Meta, StoryObj } from "@storybook/react";

import Tabs, { TabsContent, TabsList, TabsTrigger } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => <Tabs {...args} />;

type Story = StoryObj<typeof Template>;

export const Primary: Story = {
  render: (args) => (
    <Tabs defaultValue="account" {...args}>
      <TabsList variant="primary">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};

export const Secondary: Story = {
  render: (args) => (
    <Tabs defaultValue="account" {...args}>
      <TabsList variant="secondary">
        <TabsTrigger value="account" variant="secondary">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" variant="secondary">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  ),
};
