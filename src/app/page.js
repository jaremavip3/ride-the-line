"use client";
import Overview from "@/components/Overview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import Author from "@/components/Author";
import FixedFooter from "@/components/FixedFooter";
import { useEffect } from "react";
import ProgressBar from "@/components/ProgressBar";
import MovingLottie from "@/components/MovingBic";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <ProgressBar />

      <Header />
      <MovingLottie />
      <Hero />

      <FixedFooter />
      <Overview />
      <Author />

      <Footer />
    </div>
  );
}
