import type { Meta, StoryObj } from "@storybook/react";
import { Layer } from "./Layer";

const meta = {
  title: "layout/Layer",
  component: Layer,
  args: {
    children: (
      <>
        <div className="size-6 bg-brand-secondary !bg-brand-primary opacity-80" />
        <div className="size-6 bg-brand-secondary !bg-brand-secondary opacity-80 translate-x-4 translate-y-4" />
        <div className="size-6 bg-brand-secondary !bg-foreground opacity-80 translate-x-8 translate-y-8" />
      </>
    ),
  },
} satisfies Meta<typeof Layer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Layer",
};
