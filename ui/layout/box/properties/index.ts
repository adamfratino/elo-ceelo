import ax from "./ax.json";
import ay from "./ay.json";
import direction from "./direction.json";
import gap from "./gap.json";
import m from "./m.json";
import mx from "./mx.json";
import my from "./my.json";
import p from "./p.json";
import px from "./px.json";
import py from "./py.json";
import w from "./w.json";
import visibility from "./visibility.json";

/**
 * Represents a responsive property which can be either:
 * - A single value (key of the 'base' configuration)
 * - An object mapping breakpoints to values
 *
 * @template T - The configuration object (e.g., align, size, visibility)
 */
export type ResponsiveProp<T extends Record<string, Record<string, string>>> =
  | keyof T["base"]
  | Partial<Record<keyof T, keyof T["base"]>>;

export type ResponsiveAlignX = ResponsiveProp<typeof ax>;
export type ResponsiveAlignY = ResponsiveProp<typeof ay>;
export type ResponsiveDirection = ResponsiveProp<typeof direction>;
export type ResponsiveGap = ResponsiveProp<typeof gap>;
export type ResponsiveMargin = ResponsiveProp<typeof m>;
export type ResponsiveMarginX = ResponsiveProp<typeof mx>;
export type ResponsiveMarginY = ResponsiveProp<typeof my>;
export type ResponsivePadding = ResponsiveProp<typeof p>;
export type ResponsivePaddingX = ResponsiveProp<typeof px>;
export type ResponsivePaddingY = ResponsiveProp<typeof py>;
export type ResponsiveWidth = ResponsiveProp<typeof w>;
export type ResponsiveVisibility = ResponsiveProp<typeof visibility>;

export interface ResponsiveProps {
  ax?: ResponsiveAlignX;
  ay?: ResponsiveAlignY;
  direction?: ResponsiveDirection;
  gap?: ResponsiveGap;
  m?: ResponsiveMargin;
  mx?: ResponsiveMarginX;
  my?: ResponsiveMarginY;
  p?: ResponsivePadding;
  px?: ResponsivePaddingX;
  py?: ResponsivePaddingY;
  w?: ResponsiveWidth;
  visibility?: ResponsiveVisibility;
}

export const responsiveProps = {
  ax,
  ay,
  direction,
  gap,
  m,
  mx,
  my,
  p,
  px,
  py,
  w,
  visibility,
};

export function responsiveStyles(props: ResponsiveProps): string[] {
  const propsArray: string[] = [];

  // Iterate over each property in the props object
  Object.entries(props).forEach(([prop, style]) => {
    // Retrieve the corresponding configuration for the property
    const config = responsiveProps[prop as keyof ResponsiveProps];

    if (typeof style === "string") {
      // Handle single value: directly access the 'base' configuration
      const className = config.base[style as keyof typeof config.base];

      if (className) {
        propsArray.push(className);
      }
    } else if (typeof style === "object") {
      // Handle responsive object: iterate over each breakpoint and value
      Object.entries(style).forEach(([breakpoint, value]) => {
        // Access the configuration for the specific breakpoint
        const breakpointConfig = config[breakpoint as keyof typeof config];

        if (breakpointConfig) {
          // Retrieve the class name based on the value
          const className = breakpointConfig[value as keyof typeof config.base];

          if (className) {
            propsArray.push(className);
          }
        }
      });
    }
  });

  return propsArray;
}
