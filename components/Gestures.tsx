"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";

type Props = {};

const BasicsOfMotion = (props: Props) => {
  return (
    <div className="grid h-screen gap-3 place-content-center">
      {/* MotionConfig is used to set default transition properties for all motion components */}
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          type="button"
          className="bg-indigo-500 text-white px-5 py-2 rounded-sm hover:bg-indigo-600 mt-5"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
            rotate: "4.5deg",
          }}
        >
          Click me!
        </motion.button>
        <motion.button
          type="button"
          className="bg-rose-500 text-white px-5 py-2 rounded-sm hover:bg-rose-600 mt-5"
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{
            scale: 0.76,
            rotate: "-4.5deg",
          }}
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default BasicsOfMotion;
