import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "../box/Box";

import flexConfig from "./Flex.config.json";

export const flexStyles = cva({
  base: flexConfig.styles,
  variants: {
    evenly: { true: "[&>*]:flex-1" },
  },
  defaultVariants: {},
});

export type FlexProps = BoxProps & VariantProps<typeof flexStyles>;

export const Flex = ({
  evenly,
  as = flexConfig.element as React.ElementType,
  className,
  children,
  ...props
}: FlexProps) => (
  <Box
    data-uiid={flexConfig.uiid}
    className={cx(flexStyles({ evenly, className }))}
    {...props}
  >
    {children}
  </Box>
);
Flex.displayName = flexConfig.displayName;
