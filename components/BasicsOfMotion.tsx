"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const BasicsOfMotion = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="grid h-screen gap-3 place-content-center">
      {/* AnimatePresence is for animating components that are removed from DOM  type mode are "sync", "wait", "popLayout" */}
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            // example of properties that can be animated: https://www.framer.com/api/motion/animation/#animate
            // initial props are applied only on first render
            // example property of initial: rotate, scale, opacity, etc
            initial={{
              rotate: "0deg",
              scale: 0,
              opacity: 0,
              y: 0,
            }}
            // animate props are applied on every render
            // example property of animate: rotate, scale, opacity, etc
            animate={{
              rotate: "180deg",
              scale: 1,
              opacity: 1,
              y: [0, 150, -150, -150, 0],
            }}
            // exit props are applied when component is removed from DOM
            // example property of exit: rotate, scale, opacity, etc
            exit={{
              rotate: "0deg",
              opacity: 0,
              scale: 0,
              y: 0,
            }}
            // transition props are applied on every render
            // example property of transition: duration, ease, type, etc
            transition={{
              duration: 1,
              ease: "backInOut",
              // times is used to animate the component in a sequence length of times should be equal to length of values in animate
              times: [0, 0.25, 0.5, 0.85, 1],
              //  type: "spring",
            }}
            className="w-[150px] h-[150px] rounded-md shadow-white shadow-sm bg-indigo-900 scale-100 hover:scale-125"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        type="button"
        className="bg-indigo-500 text-white px-2 py-1 rounded-sm hover:bg-indigo-600 mt-5"
        // layout prop is used to animate the position of the button
        layout
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
};

export default BasicsOfMotion;
