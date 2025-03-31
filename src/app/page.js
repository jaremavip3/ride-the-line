"use client";
import Overview from "@/components/Overview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import Author from "@/components/Author";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let path = document.querySelector("path");
    let pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + " " + pathLength; // the total length of the path
    path.style.strokeDashoffset = pathLength; //offset the dash to the length of the path

    window.addEventListener("scroll", () => {
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      var drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - drawLength; //draw the path as you scroll
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      {/* SVG path container */}
      <div className="z-10 fixed top-0 left-0 w-full h-full  overflow-hidden text-center">
        {/* SVG PATH */}

        <svg
          className="h-full inline-block"
          width="565"
          height="2837"
          viewBox="0 0 565 2837"
          fill="none"
          preserveAspectRatio="xMidYMax meet"
        >
          <path
            d="M562.501 2C409.301 231.2 574 515.5 497.5 569C421 622.5 318.038 722.003 144.5 675C183.7 943.4 561 1261.5 57.0004 1440.5C-195.5 1719.5 522 1577.5 531 1927.5C540 2277.5 573.5 2834.5 462.5 2834.5"
            stroke="#FB2C36"
            stroke-width="5"
          />
        </svg>
      </div>
      <Header />
      <Hero />
      <Overview />
      <Author />

      <Footer />
    </div>
  );
}
