import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "../box/Box";

import groupConfig from "./Group.config.json";

const groupStyles = cva({
  base: groupConfig.styles,
  variants: groupConfig.variants,
  defaultVariants: {},
});

export type GroupProps = {
  evenly?: boolean;
  inline?: boolean;
} & BoxProps &
  VariantProps<typeof groupStyles>;

export const Group = ({
  evenly,
  inline,
  as = groupConfig.element as React.ElementType,
  className,
  children,
  ...props
}: GroupProps) => {
  return (
    <Box
      data-uiid={groupConfig.uiid}
      className={cx(groupStyles({ evenly, inline, className }))}
      {...props}
    >
      {children}
    </Box>
  );
};
Group.displayName = groupConfig.displayName;
