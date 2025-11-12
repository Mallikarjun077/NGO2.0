import React from "react";
import { motion } from "framer-motion";
import useInView from "../Helpers/useInView";

export default function AnimationReveal({
  children,
  animation = "modern",
  delayStep = 0.2,
}) {
  if (!Array.isArray(children)) children = [children];

  return (
    <div className="min-h-screen p-8 text-gray-800 overflow-hidden font-sans">
      {children.map((child, i) => (
        <AnimatedInView
          key={i}
          index={i}
          animation={animation}
          delayStep={delayStep}
        >
          {child}
        </AnimatedInView>
      ))}
    </div>
  );
}

function AnimatedInView({ animation = "modern", children, index = 0, delayStep = 0.5 }) {
  const [ref, inView] = useInView({ margin: "-100px 0px" });

  const variants = {
    modern: {
      hidden: { opacity: 0, y: 40, scale: 0.98 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 60,
          damping: 20,
          duration: 0.7,
          delay: index * delayStep,
        },
      },
    },

    slide: {
      hidden: { x: -120, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 70, damping: 18, delay: index * delayStep },
      },
    },

    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, delay: index * delayStep },
      },
    },

    /** 🔍 Zoom or scale effect */
    scale: {
      hidden: { scale: 0.85, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, delay: index * delayStep, ease: "easeOut" },
      },
    },

    /** ⬆️ Float-up reveal */
    up: {
      hidden: { y: 80, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 80, damping: 16, delay: index * delayStep },
      },
    },

    /** 🔄 Rotate reveal */
    rotate: {
      hidden: { rotate: -10, opacity: 0, y: 30 },
      visible: {
        rotate: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut", delay: index * delayStep },
      },
    },

    /** 💫 Flip animation */
    flip: {
      hidden: { rotateY: 90, opacity: 0 },
      visible: {
        rotateY: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut", delay: index * delayStep },
      },
    },

    /** 🔎 Zoom-in pop animation */
    zoom: {
      hidden: { scale: 0.6, opacity: 0 },
      visible: {
        scale: 1.05,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 14, delay: index * delayStep },
      },
    },

    /** 🌁 Blur to clear reveal */
    blur: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.8, delay: index * delayStep },
      },
    },

    /** 🪩 Bounce-in animation */
    bounce: {
      hidden: { y: 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.5,
          duration: 1.2,
          delay: index * delayStep,
        },
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.section
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants[animation]}
        className="mb-10"
      >
        {children}
      </motion.section>
    </div>
  );
}
