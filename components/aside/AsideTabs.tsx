import { Tabs } from "@base-ui-components/react/tabs";

import { Group, Layer } from "@/ui/layout";

import { Overview } from "./Overview";
import { Rules } from "./Rules";

export const AsideTabs = () => {
  return (
    <Tabs.Root defaultValue="overview" className="flex-1">
      <Group asChild gap="xs" px="xs" w="full" evenly>
        <Tabs.List className="relative">
          <Tab value="overview">Overview</Tab>
          <Tab value="rules">Rules</Tab>
          <Tab value="account">Settings</Tab>
          <Tabs.Indicator className="absolute top-1/2 left-0 z-[-1] h-8 w-[var(--active-tab-width)] -translate-y-1/2 translate-x-[var(--active-tab-left)] rounded-sm bg-muted transition-all duration-200 ease-in-out" />
        </Tabs.List>
      </Group>
      <Layer w="full">
        <TabPanel value="overview">
          <Overview />
        </TabPanel>
        <TabPanel value="rules">
          <Rules />
        </TabPanel>
        <TabPanel value="account">TKTKTKTK</TabPanel>
      </Layer>
    </Tabs.Root>
  );
};
AsideTabs.displayName = "AsideTabs";

type Tab = React.PropsWithChildren<{ value: string }>;

const Tab = ({ value, children }: Tab) => {
  return (
    <Tabs.Tab
      className="flex h-8 font-bold items-center justify-center border-0 px-2 text-sm outline-none select-none before:inset-x-0 before:inset-y-1 before:rounded-sm hover:text-gray-900 focus-visible:relative focus-visible:before:absolute data-[selected]:text-foreground !focus:outline-offset-0"
      value={value}
    >
      {children}
    </Tabs.Tab>
  );
};
Tab.displayName = "Tab";

const TabPanel = ({ value, children }: Tab) => {
  return (
    <Tabs.Panel
      className="py-8 relative flex flex-col items-center justify-center focus-visible:rounded-md overflow-y-auto"
      value={value}
    >
      {children}
    </Tabs.Panel>
  );
};
TabPanel.displayName = "TabPanel";
