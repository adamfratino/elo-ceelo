"use client";

import { CircleHelp, X } from "lucide-react";
import { Drawer } from "vaul";

import { HELP_ICON_SIZE } from "@/lib/constants";

export const VaulDrawer = () => {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger className="hover:scale-105 active:scale-95 transition-all fixed top-4 right-4 rounded-full">
        <CircleHelp size={HELP_ICON_SIZE} />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-[rgba(0,0,0,0.85)]" />
        <Drawer.Content className="bg-background p-12 px-6 fixed top-0 bottom-0 right-0 max-w-96 outline-none normal-case font-normal [&_a]:text-positive [&_a]:underline hover:[&_a]:no-underline rounded-lg">
          <div className="flex justify-between align-start mb-6 border-b border-dashed border-subtle pb-6 mr-12">
            <div>
              <Drawer.Title className="text-xl font-bold mb">
                What is all this?
              </Drawer.Title>
            </div>
            <Drawer.Close className="fixed top-4 right-4 animated-focus">
              <X size={HELP_ICON_SIZE} />
            </Drawer.Close>
          </div>
          <p className="balance text-sm mb-6 mr-6 font-light leading-relaxed">
            <a
              href="https://en.wikipedia.org/wiki/Elo_rating_system"
              target="_blank"
              className="font-bold uppercase"
            >
              Elo
            </a>{" "}
            is a ranking system that measures how a player&apos;s skilled
            relative to their opponents. When you win, you gain points. Beat
            someone ranked way higher? You&apos;ll gain more points. Lose to
            someone ranked lower? You&apos;ll lose more points. Simple, but it
            works.
          </p>
          <p className="balance text-sm mb-6 mr-6 font-light leading-relaxed">
            <a
              href="https://en.wikipedia.org/wiki/Cee-lo"
              target="_blank"
              className="font-bold uppercase"
            >
              Cee-lo
            </a>{" "}
            is a fast-paced dice game played with three dice. Players compete to
            roll the best combination, from the coveted 4-5-6 to matching pairs
            and triples. Simple to learn, but with just enough strategy to keep
            things interesting.
          </p>
          <p className="balance text-sm mb-6 mr-6 font-light leading-relaxed">
            Does Cee-lo need a complex ranking system that was designed for
            chess? Not really - it&apos;s entirely luck and you&apos;re usually
            playing for something more interesting than rating points. But hey,
            watching your Elo climb after a hot streak can be satisfying too,
            and everyone loves pressing buttons.
          </p>
          <Drawer.Description className="text-xs border-t border-dashed border-subtle pt-6">
            <strong>TL;DR:</strong> become the best at RNG
          </Drawer.Description>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
