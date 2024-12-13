import { motion } from "framer-motion";
import { ReactNode } from "react";

export const MotionRightLeft = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ position: "relative", bottom: 40, right: 300, opacity: 0 }}
      animate={{ position: "relative", bottom: 40, right: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      {children}
    </motion.div>
  );
};
