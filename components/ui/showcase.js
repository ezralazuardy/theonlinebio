"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Showcase() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      <ShowcaseLabel
        className={`transition-all duration-500 transform ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      />
      <div
        ref={containerRef}
        className="min-h-48 flex w-full py-10 px-20 space-x-6 justify-center items-center backdrop-filter backdrop-blur-md border-t border-r border-neutral-600/70"
      >
        <ShowcaseItems />
      </div>
    </div>
  );
}

export function ShowcaseLabel({ className }) {
  return (
    <div className={`flex w-full ps-20 ${className}`}>
      <div className="flex px-4 py-2 bg-white/70 text-sm text-black border-t border-l border-r border-neutral-600/70">
        Latest Showcase <ArrowDown className="size-4 ml-2 mt-0.5" />
      </div>
    </div>
  );
}

export function ShowcaseItems() {
  return (
    <>
      <ShowcaseItem image="showcase-01" username="ezra" />
      <ShowcaseItem image="showcase-02" username="stephanie" />
      <ShowcaseItem image="showcase-03" username="yunius" />
    </>
  );
}

export function ShowcaseItem({ image, username }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Link
      href={`https://${username}.theonline.bio`}
      className="relative aspect-video w-auto h-24 rounded-sm border border-neutral-600/70 group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`flex w-full h-full rounded-sm ${
          isImageLoaded ? "bg-black" : "bg-neutral-600 animate-pulse"
        }`}
      ></div>
      <Image
        onLoad={() => setIsImageLoaded(true)}
        alt={`${username}.theonline.bio`}
        src={`/images/showcases/${image}.png`}
        className={`flex w-full h-full object-cover transition-opacity duration-1000 rounded-sm ${
          isImageLoaded ? "opacity-80" : "opacity-0"
        }`}
        preload="true"
        priority="true"
        fill
      />
      <div className="absolute top-0 left-0 cursor-pointer w-full h-full rounded-sm bg-black/70 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <ArrowUpRight className="size-5 absolute top-2 right-2" />
        <span className="font-mono text-xs absolute bottom-2 left-3 max-w-xs">
          {username}.
          <br />
          theonline.bio
        </span>
      </div>
    </Link>
  );
}
