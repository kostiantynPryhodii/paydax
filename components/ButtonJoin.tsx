import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtomProps = {
  children: ReactNode;
};

export function ButtonJoin({ children }: ButtomProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 6px 12px rgba(192, 217, 8, 0.6)",
      }}
      whileTap={{ scale: 0.97 }}
      className="relative z-10 text-[var(--Black)] text-[18px] font-bold leading-[17px] uppercase rounded-[5px] bg-[var(--Volt-Greem)] shadow-[0_4px_4px_0_rgba(0,0,0,0.15)] py-4 px-8 cursor-pointer"
      type="button"
    >
      {children}
    </motion.button>
  );
}
