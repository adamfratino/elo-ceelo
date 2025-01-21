import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "./box/Box";

export const stackStyles = cva({
  base: ["flex", "flex-col"],
  variants: {
    inline: { true: "inline-flex" },
  },
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
    className={cx(stackStyles({ inline, className }))}
    ax={ay}
    ay={ax}
    {...props}
  >
    {children}
  </Box>
);
Stack.displayName = "Stack";
