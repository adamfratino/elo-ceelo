"use client";

import { CircleHelp, X } from "lucide-react";
import { Drawer } from "vaul";

import { HELP_ICON_SIZE, APP_DESCRIPTION } from "@/lib/constants";

import { AsideTabs } from "./AsideTabs";

export const AsideDrawer = () => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="hover:scale-105 transition-all fixed top-4 right-4 rounded-full">
        <CircleHelp size={HELP_ICON_SIZE} />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-[rgba(0,0,0,0.85)]" />
        <Drawer.Content className="bg-background p-12 px-6 fixed top-0 bottom-0 right-0 w-96 outline-none normal-case font-normal [&_a]:text-positive [&_a]:underline hover:[&_a]:no-underline rounded-lg overflow-y-auto overflow-x-hidden">
          <Drawer.Title className="text-xl font-bold sr-only">
            What is all this?
          </Drawer.Title>
          <Drawer.Description className="text-xs mt-6 sr-only">
            <strong>TL;DR:</strong> {APP_DESCRIPTION}
          </Drawer.Description>
          <AsideTabs />
          <Drawer.Close className="fixed top-4 right-4">
            <X size={HELP_ICON_SIZE} />
          </Drawer.Close>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
AsideDrawer.displayName = "AsideDrawer";
