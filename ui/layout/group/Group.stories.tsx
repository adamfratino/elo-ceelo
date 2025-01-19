import type { Meta, StoryObj } from "@storybook/react";
import { Group } from "./Group";

const meta = {
  title: "layout/Group",
  component: Group,
  args: {
    gap: { base: "sm", md: "md" },
    children: (
      <>
        <div className="size-6 bg-brand-secondary" />
        <div className="size-6 bg-brand-secondary" />
        <div className="size-6 bg-brand-secondary" />
        <div className="size-6 bg-brand-secondary" />
        <div className="size-6 bg-brand-secondary" />
        <div className="size-6 bg-brand-secondary" />
      </>
    ),
  },
} satisfies Meta<typeof Group>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Evenly: Story = {
  args: {
    evenly: true,
  },
};
