"use client";

import { motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./index.module.scss";
import Link from "next/link";
import { opacity, slide, perspective } from "./anim";

type Props = {
  children: React.ReactNode;
};

const Inner = ({ children }: Props) => {
  const key = usePathname();
  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  return (
    <div className={styles.inner}>
      <motion.div className={styles.slide} {...anim(slide)} />
      <motion.div className={styles.page} {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          <header className="space-x-3 py-5">
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
