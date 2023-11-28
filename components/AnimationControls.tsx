"use client";

import React from "react";
import { motion, useAnimationControls } from "framer-motion";

type Props = {};

function AnimationControls({}: Props) {
  const controls = useAnimationControls();
  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div className="grid place-content-center h-screen gap-3">
      <button
        type="button"
        onClick={handleClick}
        className="bg-indigo-500 text-white px-2 py-1 rounded-sm hover:bg-indigo-600 mt-5"
      >
        Flip It!
      </button>
      <motion.div
        className="w-[150px] h-[150px] bg-indigo-400"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        // whileHover="flip"
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
}

export default AnimationControls;
