import { cva, cx, type VariantProps } from "@/ui/cva";
import { Box, type BoxProps } from "./box/Box";

export const flexStyles = cva({
  base: ["flex"],
  variants: {
    evenly: { true: "[&>*]:flex-1" },
  },
  defaultVariants: {},
});

export type FlexProps = BoxProps & VariantProps<typeof flexStyles>;

export const Flex = ({
  evenly,
  as,
  className,
  children,
  ...props
}: FlexProps) => (
  <Box className={cx(flexStyles({ evenly, className }))} {...props}>
    {children}
  </Box>
);
Flex.displayName = "Flex";
