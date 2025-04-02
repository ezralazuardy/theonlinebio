"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Background() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const handleLoaded = () => {
        setIsVideoLoaded(true);
      };

      setTimeout(() => {
        video.addEventListener("loadeddata", handleLoaded);
        video.addEventListener("loadedmetadata", handleLoaded);
        video.addEventListener("canplay", handleLoaded);

        if (video.readyState >= 3) {
          handleLoaded();
        }

        video.play().catch((error) => {
          console.error("Video playback failed:", error);
        });
      }, 600);

      return () => {
        video.removeEventListener("loadeddata", handleLoaded);
        video.removeEventListener("loadedmetadata", handleLoaded);
        video.removeEventListener("canplay", handleLoaded);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {!isVideoLoaded && (
        <Image
          onLoad={() => setIsImageLoaded(true)}
          src="/images/cover-thumbnail-1.png"
          alt="Cover Thumbnail"
          preload="true"
          quality={100}
          className={`object-cover opacity-0 transition-opacity duration-500 ${
            isImageLoaded ? "opacity-40" : "opacity-0"
          }`}
          fill
        />
      )}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 opacity-40 w-full h-full object-cover ${
          isVideoLoaded ? "block" : "hidden"
        }`}
        src="/videos/cover-1.mp4"
        preload="true"
        loop
        muted
        playsInline
        autoPlay
      />
    </div>
  );
}
