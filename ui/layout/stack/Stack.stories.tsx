import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta = {
  title: "layout/Stack",
  component: Stack,
  args: {
    gap: { base: "sm", md: "md" },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Stack",
  args: {
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
};
