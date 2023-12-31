"use client";

import { motion } from "framer-motion";

function Divider() {
  return (
    <motion.div
      className="my-12 block h-16 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:my-24"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.125,
      }}
    ></motion.div>
  );
}

export default Divider;
