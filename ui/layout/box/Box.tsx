import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

import { cx, cva, type VariantProps } from "@/ui/cva";

import { responsiveStyles, type ResponsiveProps } from "./properties";
import boxConfig from "./Box.config.json";

export const boxStyles = cva({
  base: boxConfig.styles,
  variants: {},
  defaultVariants: {},
});

export type BoxProps = React.PropsWithChildren<{
  as?: React.ElementType;
  asChild?: boolean;
}> &
  ResponsiveProps &
  React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof boxStyles>;

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      /** responsive */
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
      visibility,
      w,
      /** other */
      as = boxConfig.element as React.ElementType,
      asChild,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : as;

    return (
      <Component
        data-uiid={boxConfig.uiid}
        className={cx(
          boxStyles({ className }),
          responsiveStyles({
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
            visibility,
            w,
          })
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Box.displayName = boxConfig.displayName;
