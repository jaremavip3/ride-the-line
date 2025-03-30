import Overview from "@/components/Overview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import Author from "@/components/Author";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <Overview />
      <Author />

      <Footer />
    </div>
  );
}
