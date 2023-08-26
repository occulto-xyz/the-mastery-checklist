"use client";

import { motion } from "framer-motion";

export default function AnimatedHeaders() {
  return (
    <motion.div className="flex flex-col lg:justify-start justify-center lg:items-start items-center space-y-6 max-w-4xl lg:text-start text-center">
      <h1 className="lg:text-4xl text-xl font-bold text-stone-50 italic">
        THE CHECKLIST
      </h1>
      <h4 className="lg:text-lg text-sm font-extralight text-stone-200 italic">
        The web app to create rule sets that dictate your operating system.
      </h4>
    </motion.div>
  );
}
