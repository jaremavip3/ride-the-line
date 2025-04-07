"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
// import bike_animation from "../../public/animations/wCDtr8Wnan.lottie";

import "@dotlottie/react-player/dist/index.css";

export default function MovingLottie() {
  return (
    <div className="absolute  w-full bottom-0  z-10  overflow-hidden h-[200px]">
      <motion.div
        initial={{ x: -200, y: 0 }} // Start position (left of screen)
        animate={{ x: "100vw", y: 0 }} // End position (right of screen)
        transition={{
          //   type: "inertia", // Type of animation
          duration: 8, // Animation duration in seconds
          repeat: 1, //
          ease: "easeInOut", // Easing function
        }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <DotLottiePlayer src="/animations/bike.lottie" autoplay loop style={{ width: 200 }} />
      </motion.div>
    </div>
  );
}
