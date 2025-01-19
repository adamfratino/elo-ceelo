"use client";

import { Menu, X } from "lucide-react";
import { Drawer } from "vaul";

import { HELP_ICON_SIZE } from "@/lib/constants";

import { AppearanceToggleGroup } from "./AppearanceToggleGroup";

export const SidebarDrawer = () => {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger className="hover:scale-105 transition-all fixed top-4 left-4">
        <Menu size={HELP_ICON_SIZE} />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-[rgba(0,0,0,0.85)]" />
        <Drawer.Content
          aria-describedby={undefined}
          className="bg-background p-12 px-6 fixed top-0 bottom-0 left-0 w-96 outline-none normal-case font-normal [&_a]:text-positive [&_a]:underline hover:[&_a]:no-underline rounded-lg overflow-y-auto overflow-x-hidden"
        >
          <Drawer.Title className="sr-only">Navigation</Drawer.Title>
          <Drawer.Close className="fixed top-4 right-4 animated-focus">
            <X size={HELP_ICON_SIZE} />
          </Drawer.Close>

          <div className="flex flex-col pb-8">
            <AppearanceToggleGroup />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
