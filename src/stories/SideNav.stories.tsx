import React from "react";
import { StoryFn, Meta, StoryObj } from "@storybook/react";
import { MdContacts } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { PiContactlessPaymentFill } from "react-icons/pi";

import SideNav, {
  SideNavItem,
  SideNavList,
} from "../components/SideNav/SideNav";

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
        <SideNavItem icon={<MdContacts />}>Item 1</SideNavItem>
        <SideNavItem icon={<IoMdContacts />} active>
          Item 2 item 2
        </SideNavItem>
        <SideNavItem icon={<PiContactlessPaymentFill />}>Item 3</SideNavItem>
      </SideNavList>
    </SideNav>
  ),
};
