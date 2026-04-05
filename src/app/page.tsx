"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";

// Dynamically import Loader to avoid SSR issues with Three.js
const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollUI />
      <Loader isLoading={isLoading} />
      <main className={`transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <Hero isReady={!isLoading} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
