import React from "react";
import { StoryFn, Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "../components";

export default {
  title: "Components/ScrollArea",
  component: ScrollArea,
} as Meta<typeof ScrollArea>;

const Template: StoryFn<typeof ScrollArea> = (args: any) => (
  <ScrollArea {...args} />
);

type Story = StoryObj<typeof Template>;

export const Default: Story = {
  render: (args: any) => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4" {...args}>
      Jokester began sneaking into the castle in the middle of the night and
      leaving jokes all over the place: under the king's pillow, in his soup,
      even in the royal toilet. The king was furious, but he couldn't seem to
      stop Jokester. And then, one day, the people of the kingdom discovered
      that the jokes left by Jokester were so funny that they couldn't help but
      laugh. And once they started laughing, they couldn't stop.
    </ScrollArea>
  ),
};
