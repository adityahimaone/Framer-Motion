import React from "react";
import { motion } from "framer-motion";
import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

const Stairs = ({ children }: Props) => {
  // custom will be index
  const anim = (variants: any, custom?: number) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const expand = {
    initial: {
      top: 0,
    },
    enter: (i: number) => ({
      top: "100vh",
      transition: {
        duration: 0.3,
        delay: 0.05 * i,
      },
      transitionEnd: {
        height: 0,
        top: 0,
      },
    }),
    exit: (i: number) => ({
      height: "100%",
      transition: {
        duration: 0.3,
        delay: 0.05 * i,
      },
    }),
  };

  const overlay = {
    initial: {
      opacity: 0.5,
    },
    enter: {
      opacity: 0,
    },
    exit: {
      opacity: 0.5,
    },
  };

  const numberOfStairs = 5;
  return (
    <div className={`page ${styles.stairs}`}>
      <motion.div {...anim(overlay)} className={styles.background}></motion.div>
      <div className={styles["transition-container"]}>
        {[...Array(numberOfStairs)].map((_, i) => {
          return <motion.div {...anim(expand, numberOfStairs - i)} key={i} />;
        })}
      </div>
      {children}
    </div>
  );
};

export default Stairs;
