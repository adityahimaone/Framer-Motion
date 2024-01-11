"use client";

import Inner from "@/components/Layouts/inner";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Page = (props: Props) => {
  return (
    <Inner>
      <h1>Home</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5, ease: "easeInOut" }}
        className="body"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          imperdiet nibh sit amet velit dignissim, non tempus nisl pellentesque.
          Praesent sagittis magna sit amet ex blandit, id pharetra lectus
          feugiat. Praesent sit amet congue ipsum, in ultrices neque. In dapibus
          in purus vitae dignissim. Quisque molestie ullamcorper elementum. Sed
          sodales erat augue. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Duis aliquet quis lectus vitae venenatis. Aliquam erat volutpat.
          Nulla maximus sodales nibh dapibus congue. Integer nec pharetra felis,
          quis commodo elit. Fusce et aliquet neque. Vivamus leo diam, pharetra
          ut lorem eu, suscipit egestas ipsum. Aenean mauris ligula, laoreet ut
          volutpat sit amet, convallis et turpis.
        </p>
        <p>
          Quisque molestie ullamcorper elementum. Sed sodales erat augue. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet quis
          lectus vitae venenatis. Aliquam erat volutpat. Nulla maximus sodales
          nibh dapibus congue. Integer nec pharetra felis, quis commodo elit.
          Fusce et aliquet neque. Vivamus leo diam, pharetra ut lorem eu,
          suscipit egestas ipsum. Aenean mauris ligula, laoreet ut volutpat sit
          amet, convallis et turpis.
        </p>
      </motion.div>
    </Inner>
  );
};

export default Page;
