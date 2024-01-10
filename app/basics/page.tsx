// source: https://youtu.be/31y7-k3ZG0g?si=1QUfIEyLGlxYl7Q8
"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

type Props = {};

const gridContainerVariants = {
  // opacity before run is 0
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      // allow children to animate before parent
      staggerChildren: 0.25,
    },
  },
};

const gridItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
};

const Page = (props: Props) => {
  const { scrollYProgress: completionProgress } = useScroll();

  const containerSectionRef = useRef(null);

  const isInView = useInView(containerSectionRef, {
    // once =  true -> means it will only trigger once
    once: true,
  });

  const mainControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: containerSectionRef,
    // offset means when to trigger the animation
    // start end means when the top of the section is at the top of the viewport
    // end end means when the bottom of the section is at the top of the viewport
    offset: ["start end", "end end"],
  });

  // means when scrollYProgress is 0, paragraphOneValue is -100
  // means when scrollYProgress is 1, paragraphOneValue is 0
  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100", "0%"]
  );

  // means when scrollYProgress is 0, paragraphTwoValue is 100
  // means when scrollYProgress is 1, paragraphTwoValue is 0
  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100", "0%"]
  );

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* Fade Up */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
            className="w-20 h-20 bg-stone-100 rounded-lg"
          ></motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="w-20 h-20 bg-stone-100 rounded-full"
          ></motion.div>
        </motion.div>
        {/* Key Frames */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="w-1/3 h-1/3 bg-rose-400 shadow-md"
          ></motion.div>
        </motion.div>
        {/* Hover & Press */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#d1d5db",
              color: "black",
            }}
            transition={{
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
            type="button"
            className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100"
          >
            Subscribe
          </motion.button>
        </motion.div>
        {/*  Drag */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-xl cursor-grab"
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            dragTransition={{
              bounceDamping: 10,
              bounceStiffness: 600,
            }}
          ></motion.div>
        </motion.div>
        {/* Scroll Progression */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className="h-full bg-gray-400 rounded-xl w-full origin-bottom"
              style={{
                scaleY: completionProgress,
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
        {/* SVG Animation */}
        <motion.div
          variants={gridItemVariants}
          className="bg-slate-800 aspect-square rounded-lg flex items-center justify-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                // border
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                // fill
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
      <section className="flex flex-col gap-10 mb-10" ref={containerSectionRef}>
        <motion.h1
          className="text-5xl tracking-wide text-slate-100 text-center"
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            delay: 0.3,
          }}
        >
          Just Keep Scrolling
        </motion.h1>
        <motion.p
          style={{ translateX: paragraphOneValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
        >
          This is a basic tutorial on how to get up and running with Framer
          Motion with some TailwindCSS. If you enjoyed this video, please leave
          a like and also subscribe.
        </motion.p>
        <motion.p
          style={{ translateX: paragraphTwoValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
        >
          Have fun playing with Framer Motion. It is a very powerful library,
          when used properly. Add some life to your websites.
        </motion.p>
      </section>
    </div>
  );
};

export default Page;
