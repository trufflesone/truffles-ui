import React from "react";
import { StoryFn, Meta, StoryObj } from "@storybook/react";
import { MdContacts } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { PiContactlessPaymentFill } from "react-icons/pi";

import { SideNav, SideNavList, SideNavListItem } from "../components";

export default {
  title: "Components/SideNav",
  component: SideNav,
} as Meta<typeof SideNav>;

const Template: StoryFn<typeof SideNav> = (args: any) => <SideNav {...args} />;

type Story = StoryObj<typeof Template>;

export const Default: Story = {
  render: (args: any) => (
    <SideNav {...args}>
      <SideNavList>
        <SideNavListItem icon={<MdContacts />}>Item 1</SideNavListItem>
        <SideNavListItem icon={<IoMdContacts />} active>
          Item 2 item 2
        </SideNavListItem>
        <SideNavListItem icon={<PiContactlessPaymentFill />}>
          Item 3
        </SideNavListItem>
      </SideNavList>
    </SideNav>
  ),
};
