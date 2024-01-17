"use client";

import { motion } from "framer-motion";
import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
};

const Curve = ({ children }: Props) => {
  const anim = (variants: any) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const notUsed = true;

  return <div className="page">{children}</div>;
};

export default Curve;
