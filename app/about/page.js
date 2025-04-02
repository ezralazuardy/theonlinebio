"use client";

import Header from "@/components/ui/header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute z-10">
        <Header />
      </div>
      <main className="absolute z-0 bottom-0 left-0 w-full h-full flex flex-col">
        <div className="grid grid-cols-2 w-full h-full">
          <div className="flex flex-col w-full justify-end items-start overflow-hidden">
            <div className="flex flex-col w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  imageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
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
          <div className="flex flex-col w-full pl-10 pe-20 justify-end backdrop-filter backdrop-blur-md pb-12">
            <h1 className="text-6xl font-light leading-tight mb-8">
              F*ck AI and your cheap website templates.
            </h1>
            <p className="flex w-full text-md text-justify text-neutral-300 mb-6">
              In a world flooded with generic AI-generated sites and
              cookie-cutter templates, standing out has never been harder. Your
              online presence should reflect who you are, and not some
              mass-produced design with zero personality. That&apos;s why The
              Online Bio™ exists. We craft unique, hand-built professional
              bios, portfolios, and profile websites that make you look like a
              leader, not just another name on the internet.
            </p>
            <p className="flex w-full text-md text-justify text-neutral-300 mb-6">
              We don&apos;t rely on AI to guess what you need or force you into
              a soulless template. Every project we take on is custom-made with
              precision, strategy, and a human touch. Whether you&apos;re an
              entrepreneur, creative, or executive, we help you build an online
              identity that truly represents you.
            </p>
            <p className="flex w-full text-md text-justify text-neutral-300">
              Because your personal brand deserves more than just a quick, cheap
              website.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
