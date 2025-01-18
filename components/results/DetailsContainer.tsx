"use client";

import { motion } from "motion/react";

import { PAGELOAD_DELAY } from "@/lib/constants";

export const DetailsContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: PAGELOAD_DELAY }}
      className="flex justify-between w-full"
    >
      {children}
    </motion.div>
  );
};
