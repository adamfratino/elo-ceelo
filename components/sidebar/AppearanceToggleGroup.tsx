import { ToggleGroup, Toggle } from "@base-ui-components/react";
import { Sun, Moon, Computer } from "lucide-react";

export const AppearanceToggleGroup = () => {
  return (
    <ToggleGroup
      defaultValue={["system"]}
      className="inline-flex self-center mt-auto rounded-md border border-subtle bg-muted p-1 gap-1"
    >
      <Toggle
        aria-label="system"
        value="system"
        className="flex size-8 items-center justify-center text-muted select-none hover:bg-subtle focus-visible:bg-none data-[pressed]:bg-subtle data-[pressed]:text-background"
      >
        <Computer size={16} className="stroke-foreground" />
      </Toggle>
      <Toggle
        aria-label="light mode"
        value="light"
        className="flex size-8 items-center justify-center text-muted select-none hover:bg-subtle focus-visible:bg-none data-[pressed]:bg-subtle data-[pressed]:text-background"
      >
        <Sun size={16} className="stroke-foreground" />
      </Toggle>
      <Toggle
        aria-label="dark mode"
        value="dark"
        className="flex size-8 items-center justify-center text-muted select-none hover:bg-subtle focus-visible:bg-none data-[pressed]:bg-subtle data-[pressed]:text-background"
      >
        <Moon size={16} className="stroke-foreground" />
      </Toggle>
    </ToggleGroup>
  );
};
