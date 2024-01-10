"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, stagger } from "framer-motion";

const links = [
  {
    title: "Introduction",
    href: "/introduction",
  },
  {
    title: "Basics",
    href: "/basics",
  },
];

export default function Home() {
  const stagger = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <>
      <div className="bg-slate-900 h-screen">
        <div className="max-w-4xl mx-auto py-5">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-medium text-2xl"
          >
            Table of content
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20, scaleX: 0 }}
            animate={{ opacity: 1, y: 0, scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="border-b border-slate-600 mt-2"
          ></motion.div>
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid grid-cols-4 gap-5 mt-8"
          >
            {links.map((link) => (
              <motion.div
                key={link.title}
                className="col-span-1 bg-blue-800 aspect-square rounded-lg flex hover:bg-blue-900"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={link.href}
                  className="h-full w-full flex justify-center items-center"
                >
                  <span className="text-white text-xl">{link.title}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
