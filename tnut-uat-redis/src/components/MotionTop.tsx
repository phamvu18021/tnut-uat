import { motion } from "framer-motion";
import { ReactNode } from "react";

export const MotionTop = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{
        position: "relative",
        bottom: 500,
        top: 100,
        opacity: 0
      }}
      animate={{
        position: "relative",
        bottom: 0,
        top: 0,
        opacity: 1
      }}
      transition={{ duration: 1, delay: 0 }}
    >
      {children}
    </motion.div>
  );
};
