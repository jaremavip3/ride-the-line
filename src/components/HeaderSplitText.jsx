import { useEffect, useRef } from "react";
import { animate, stagger } from "framer-motion";
import { splitText } from "motion-plus";

export default function SplitText() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Make the container visible once fonts are loaded
      containerRef.current.style.visibility = "visible";

      const rideElement = containerRef.current.querySelector("#ride");
      const theElement = containerRef.current.querySelector("#the");
      const lineElement = containerRef.current.querySelector("#line");
      if (rideElement && theElement && lineElement) {
        const rideSplit = splitText(rideElement);
        const theSplit = splitText(theElement);
        const lineSplit = splitText(lineElement);
        // Animate each word with a staggered delay
        animate(rideSplit.words, { opacity: [0, 1], y: [10, 0] }, { type: "spring", duration: 2, bounce: 0, delay: 0 });

        animate(
          theSplit.words,
          { opacity: [0, 1], y: [10, 0] },
          { type: "spring", duration: 2, bounce: 0, delay: 0.25 }
        );

        animate(
          lineSplit.words,
          { opacity: [0, 1], y: [10, 0] },
          { type: "spring", duration: 2, bounce: 0, delay: 0.5 }
        );
      }
    });
  }, []);

  return (
    <div className="container-text" ref={containerRef}>
      <div id="text-container" className="sm:bg-transparent rounded-lg ">
        <span id="ride" className="font-thin drop-shadow-2xl">
          RIDE
        </span>
        <br />
        <span id="the" className="font-medium drop-shadow-2xl">
          THE
        </span>
        <br />
        <span id="line" className="text-red-600/85 font-black">
          LINE
        </span>
      </div>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container-text {
                width: 100%;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
