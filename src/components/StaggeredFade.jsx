"use client";
// import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import * as React from "react";


export const StaggeredFade = ({
  text,
  className = "",
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const letters = text.split("");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={variants}
      viewport={{ once: true }}
      className={(
        className
      )}
    >
      {letters.map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
};
