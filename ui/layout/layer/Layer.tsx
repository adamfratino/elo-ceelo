import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "../box/Box";

import layerConfig from "./Layer.config.json";

export const layerStyles = cva({
  base: layerConfig.styles,
  variants: {},
  defaultVariants: {},
});

export type LayerProps = BoxProps &
  VariantProps<typeof layerStyles> & {
    // offsetX: number;
    // offsetY: number;
  };

export const Layer = ({
  as = layerConfig.element as React.ElementType,
  className,
  children,
  ...props
}: LayerProps) => (
  <Box
    data-uiid={layerConfig.uiid}
    className={cx(layerStyles({ className }))}
    {...props}
  >
    {children}
  </Box>
);
Layer.displayName = layerConfig.displayName;
