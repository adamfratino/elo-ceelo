import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "../box/Box";

import stackConfig from "./Stack.config.json";

export const stackStyles = cva({
  base: stackConfig.styles,
  variants: stackConfig.variants,
  defaultVariants: {},
});

export type StackProps = {
  ax?: BoxProps["ay"];
  ay?: BoxProps["ax"];
} & BoxProps &
  VariantProps<typeof stackStyles>;

export const Stack = ({
  ax,
  ay,
  inline,
  className,
  children,
  ...props
}: StackProps) => (
  <Box
    data-uiid={stackConfig.uiid}
    className={cx(stackStyles({ inline, className }))}
    ax={ay}
    ay={ax}
    {...props}
  >
    {children}
  </Box>
);
Stack.displayName = stackConfig.displayName;
