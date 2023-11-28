"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {};

function ViewBaseAnimations({}: Props) {
  const ref = useRef(null);
  // add param once: true to useInView to trigger animation only once
  const isInView = useInView(ref, {});

  useEffect(() => {
    console.log("isInView", isInView);
  }, [isInView]);

  return (
    <div>
      <div className="h-[150vh]"></div>
      <motion.div
        className="h-[100vh] bg-indigo-900 drop-shadow-2xl rounded-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        ref={ref}
        className={[
          "h-screen transition-all duration-[1s] ease-in-out",
          isInView ? "bg-blue-500" : "bg-red-500",
        ].join(" ")}
      ></div>
    </div>
  );
}

export default ViewBaseAnimations;
