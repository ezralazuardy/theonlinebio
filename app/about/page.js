"use client";

import Header from "@/components/ui/header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const metadata = {
  title: "The Online Bio™ | About",
  description: "F*ck AI and your cheap website templates.",
};

const year = new Date().getFullYear();

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isBrowserChecked, setBrowserChecked] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (!isBrowserChecked) {
      const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      setIsSafari(isSafariBrowser);
      setBrowserChecked(true);
    }
  }, [isBrowserChecked]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed z-30">
        <Header />
      </div>
      <main className="absolute z-20 bottom-0 left-0 w-full h-full flex flex-col overflow-y overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          <div className="hidden lg:flex flex-col w-full justify-end items-start overflow-hidden">
            <div className="flex flex-col w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <Image
                  src="/images/about-hero.png"
                  alt="About Us"
                  className="w-full h-[80vh] object-cover"
                  width={500}
                  height={500}
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              </motion.div>
            </div>
          </div>
          <div
            className={`flex flex-col w-full ps-8 lg:ps-10 pe-8 lg:pe-20 justify-end backdrop-filter backdrop-blur-md pb-0 ${isSafari ? "pb-28 lg:pb-12" : "pb-12"}`}
          >
            <h1 className="mt-[25.5vh] mb-8 text-4xl lg:text-6xl font-light leading-tight">
              F*ck AI and Your Cheap Website Templates.
            </h1>
            <p className="flex w-full text-md text-justify text-neutral-300 mb-6">
              In a world flooded with generic AI-generated sites and cookie-cutter templates,
              standing out has never been harder. Your online presence should reflect who you are,
              and not some mass-produced design with zero personality.
            </p>
            <p className="flex w-full text-md text-justify text-neutral-300 mb-6">
              That&apos;s why The Online Bio™ exists. We craft unique, hand-built professional bios,
              portfolios, and profile websites that make you look like a leader, not just another
              name on the internet.
            </p>
            <p className="flex w-full text-md text-justify text-neutral-300 mb-8">
              Because your personal brand deserves more than just a quick, cheap website.
            </p>
            <p className="flex w-full text-xs text-justify text-neutral-300">
              The Online Bio™ is a service product from Lazuardy. <br className="hidden lg:flex" />
              Copyright © {year} PT Inovasi Kolektif Digital (The Online Bio™, LEXA, Lazuardy, We,
              Our, Us). <br className="hidden lg:flex" />
              All rights reserved. www.lazuardy.tech. contact@lazuardy.tech.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
