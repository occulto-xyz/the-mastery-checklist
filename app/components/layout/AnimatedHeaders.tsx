"use client";

import { motion } from "framer-motion";

export default function AnimatedHeaders() {
  const haedersMotion = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      animate="visible"
      className="flex flex-col lg:justify-start justify-center lg:items-start items-center space-y-6 max-w-4xl lg:text-start text-center"
      initial="hidden"
      variants={haedersMotion}
    >
      <motion.h1
        className="lg:text-4xl text-xl font-bold text-stone-50 italic"
        variants={itemMotion}
      >
        THE MASTERY CHECKLIST
      </motion.h1>
      <motion.h4
        className="lg:text-lg text-sm font-extralight text-stone-200 italic"
        variants={itemMotion}
      >
        The web app to create rule sets that dictate your operating system.
      </motion.h4>
    </motion.div>
  );
}
