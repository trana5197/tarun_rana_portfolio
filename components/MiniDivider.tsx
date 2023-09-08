"use client";

import { motion } from "framer-motion";

function MiniDivider() {
  return (
    <motion.div
      className="my-3 block h-6 w-1 rounded-full bg-gray-200 last:w-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.125,
      }}
    ></motion.div>
  );
}

export default MiniDivider;
