"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { opacity, slide, perspective } from "./anim";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const Inner = ({ children }: Props) => {
  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const notUsed = true;

  return (
    <div className={styles.inner}>
      <motion.div className={styles.slide} {...anim(slide)} />
      <motion.div className={styles.page} {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <header
            className={cn("space-x-3", { hidden: notUsed, "py-5": !notUsed })}
          >
            <Link className="border-b border-slate-500" href="/transition">
              Home
            </Link>
            <Link
              className="border-b border-slate-500"
              href="/transition/about"
            >
              About
            </Link>
            <Link
              className="border-b border-slate-500"
              href="/transition/contact"
            >
              Contact
            </Link>
          </header>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Inner;
