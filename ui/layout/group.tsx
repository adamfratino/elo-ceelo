import { cva, cx, type VariantProps } from "@/ui/cva";

import { Box, type BoxProps } from "./box/Box";

const groupStyles = cva({
  base: ["flex"],
  variants: {
    evenly: { true: "[&>*]:flex-1" },
    inline: { true: "inline-flex" },
    wrap: { true: "flex-wrap" },
  },
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
  as,
  className,
  children,
  ...props
}: GroupProps) => {
  return (
    <Box className={cx(groupStyles({ evenly, inline, className }))} {...props}>
      {children}
    </Box>
  );
};
Group.displayName = "Group";
