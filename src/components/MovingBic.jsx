"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
// import bike_animation from "../../public/animations/wCDtr8Wnan.lottie";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function MovingLottie() {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    // Load the animation data on the client side
    import("/public/animations/bike.json")
      .then((data) => setAnimationData(data.default || data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);
  return (
    <div
      className="absolute  w-full bottom-0  z-10  h-[200px] pointer-events-none overflow-hidden"
      style={{ bottom: "50px" }}
    >
      <motion.div
        initial={{ x: -200, y: 0 }} // Start position (left of screen)
        animate={{ x: "100vw", y: 0 }} // End position (right of screen)
        transition={{
          //   type: "inertia", // Type of animation
          duration: 8, // Animation duration in seconds
          repeat: 0, //
          ease: "easeInOut", // Easing function
        }}
        style={{
          position: "absolute",
          bottom: -20, // Adjust this value to position the animation directly on the red line
          left: 0,
        }}
      >
        {animationData && <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: 200 }} />}
      </motion.div>
    </div>
  );
}
