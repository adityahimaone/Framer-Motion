// source: https://blog.olivierlarose.com/tutorials/parallax-scroll
"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import styles from "./page.module.scss";
import Parallax from "@/components/Parallax";

type Props = {};

const Page = (props: Props) => {
  // function to make scroll smooth
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className={styles["body-parallax"]}>
      <Parallax />
    </section>
  );
};

export default Page;
