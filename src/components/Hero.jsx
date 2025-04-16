"use client";
import { useState } from "react";
import { getImageProps } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "./HeaderSplitText";
import desktop_background from "../../public/test_new.jpg";
import mobile_background from "../../public/test_new_mobile.jpg";
import test_background from "../../public/test_background.jpg";
import ReactPlayer from "react-player/lazy"; // Lazy loading for better performance

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "/video/trailer.mp4";

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ alt: "desktop backgroudn image", src: desktop_background });
  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({ alt: "mobile backgroudn image", src: mobile_background });

  const desktopBackgroundImage = getBackgroundImage(desktopSrcSet);
  const mobileBackgroundImage = getBackgroundImage(mobileSrcSet);
  const style = {
    height: "100vh",
    width: "100%",

    backgroundPosition: "center",

    backgroundRepeat: "no-repeat",
  };
  const customCSS = `
    @media (min-width: 624px) {
      .responsive-bg {
       background-size: cover;
        background-image: ${desktopBackgroundImage};

      }
    }

    @media (max-width: 623px) {
      .responsive-bg {
           background-size: auto 100vh ;
        background-image: ${mobileBackgroundImage};
        background-position: center;
      } 

    }
  `;

  return (
    <>
      <style>{customCSS}</style>

      <section className="relative responsive-bg text-white " style={style}>
        {/* Button on smaller screens */}
        <div className="w-full absolute top-8/12  flex justify-center z-10 sm:hidden">
          <button
            onClick={() => {
              setIsPlaying(true);
            }}
            className="  bg-red-600 text-xl p-1 font-bold rounded-sm hover:bg-red-700 transition-colors uppercase "
          >
            Watch the trailer
          </button>
        </div>
        {/* Header Text */}
        <div className="absolute  inset-0 flex items-center  ">
          <div className="container mx-auto px-6 md:px-12 lg:mx-16  ">
            <div className=" md:w-1/2 lg:w-1/2 leading-[0.9] tracking-[-0.02em] text-7xl sm:text-9xl lg:text-[9rem] flex">
              <SplitText />
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/12  w-full ">
          <div className="container mx-auto  px-3 md:px-12 lg:px-16 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl  ">
            <div className=" flex gap-2  sm:gap-6 md:gap-14 lg:gap-20 text-white uppercase   justify-center items-center">
              <a
                href="#overview"
                className="  z-10  px-3 py-1 relative inline-block tracking-widest font-bold swipe-pseudo"
              >
                About the film
              </a>
              <button
                href="#trailer"
                onClick={() => {
                  setIsPlaying(true);
                }}
                className="bg-red-600 p-0.5 hover:bg-red-700 transition-colors font-bold uppercase hidden z-10 px-3 py-1 relative sm:inline-block tracking-widest  swipe-pseudo-trailer"
              >
                Watch the trailer
              </button>
              <a
                href="#footer"
                className=" z-10 px-3 py-1 relative inline-block tracking-widest font-bold swipe-pseudo-oposite"
              >
                Host a screening
              </a>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-20 flex items-center justify-center p-4"
              onClick={() => setIsPlaying(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-4xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute -top-12 z-30 right-0 text-4xl  text-white  hover:text-red-600  md:-right-10 md:text-5xl"
                >
                  ×
                </button>

                <div className="relative w-full aspect-video">
                  <ReactPlayer
                    url="/video/trailer.mp4"
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={true}
                    style={{
                      outline: "none",
                    }}
                    config={{
                      file: {
                        attributes: {
                          controlsList: "nodownload",
                          disablePictureInPicture: true,
                        },
                        forceVideo: true, // Important: ensures it's treated as video
                      },
                    }}
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
