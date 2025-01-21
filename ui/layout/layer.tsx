import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "./box/Box";

export const layerStyles = cva({
  base: ["grid", "[&>*]:col-[1_/_1]", "[&>*]:row-[1_/_1]"],
  variants: {},
  defaultVariants: {},
});

export type LayerProps = BoxProps &
  VariantProps<typeof layerStyles> & {
    // offsetX: number;
    // offsetY: number;
  };

export const Layer = ({ as, className, children, ...props }: LayerProps) => (
  <Box className={cx(layerStyles({ className }))} {...props}>
    {children}
  </Box>
);
Layer.displayName = "Layer";
