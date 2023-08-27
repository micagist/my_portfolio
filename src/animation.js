import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimationControls();
  const [element, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return [element, controls];
};

export const pageAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};

export const container = {
  hidden: { y: -100 },
  show: {
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 1 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 2 } },
};
