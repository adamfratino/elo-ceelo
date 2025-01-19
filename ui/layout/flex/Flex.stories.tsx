import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta = {
  title: "layout/Flex",
  component: Flex,
  args: {
    ax: "start",
    ay: "start",
    direction: { base: "column", sm: "row" },
    gap: "md",
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Flex",
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
