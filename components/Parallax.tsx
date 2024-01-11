"use client";

import React, { useRef } from "react";
import Picture1 from "@/public/4.jpg";
import Picture2 from "@/public/5.jpg";
import Picture3 from "@/public/6.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../app/parallax/page.module.scss";
import Image from "next/image";

type Props = {};

const word = "with framer-motion";

const Parallax = (props: Props) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    // pecifies the element to track the scroll progress of. In this case,
    // it's tracking the scroll progress of the container element.
    target: container,
    // specifies the range of the scroll progress. The first string "start end"
    // means the start of the scroll progress is at the start of the container
    // and the end of the scroll progress is at the end of the container.
    // The second string "end start" means the start of the scroll progress
    // is at the end of the container and the end of the scroll progress is
    // at the start of the container. This effectively means the scroll progress
    // will go from 0 to 1 as you scroll from the top to the bottom of the container,
    // and from 1 back to 0 as you scroll from the bottom back to the top.
    offset: ["start end", "end start"],
  });

  // note the y-axis if positive is down and negative is up
  // note the x-axis if positive is right and negative is left
  // This line is creating a motion value sm that represents a y-offset. As the page scrolls from top to bottom, sm will change from 0 to -50.
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // Similarly, this line is creating a motion value md that represents a y-offset. As the page scrolls from top to bottom, md will change from 0 to -150.
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  // This line is creating a motion value lg that represents a y-offset. As the page scrolls from top to bottom, lg will change from 0 to -250.
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: Picture1,
      y: 0,
    },
    {
      src: Picture2,
      y: lg,
    },
    {
      src: Picture3,
      y: md,
    },
  ];
  return (
    <div ref={container} className={styles.container}>
      <div className={styles.body}>
        <motion.h1 style={{ y: sm }}>Parallax</motion.h1>
        <h1>Scroll</h1>
        <div className={styles.word}>
          <p>
            {word.split("").map((letter, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(
                scrollYProgress,
                [0, 1],
                [0, Math.floor(Math.random() * -75) - 25]
              );
              return (
                <motion.span style={{ top: y }} key={`l_${i}`}>
                  {letter}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map(({ src, y }, i) => (
          <motion.div
            style={{ y }}
            key={`i_${i}`}
            className={styles.imageContainer}
          >
            <Image src={src} alt={`Picture-${i}`} fill placeholder="blur" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Parallax;
