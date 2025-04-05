"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Background({ type = "cover-01" }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const handleLoaded = () => {
        // setIsVideoLoaded(true);
        setTimeout(() => {
          setIsVideoLoaded(true);
        }, 1100);
        setTimeout(() => {
          video.play().catch((error) => {
            console.error("Video playback failed:", error);
          });
        }, 1200);
      };

      video.addEventListener("loadeddata", handleLoaded);
      video.addEventListener("loadedmetadata", handleLoaded);
      video.addEventListener("canplay", handleLoaded);

      if (video.readyState >= 3) {
        handleLoaded();
      }

      return () => {
        video.removeEventListener("loadeddata", handleLoaded);
        video.removeEventListener("loadedmetadata", handleLoaded);
        video.removeEventListener("canplay", handleLoaded);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <Image
        onLoad={() => setIsImageLoaded(true)}
        alt="Cover Thumbnail"
        src={`/videos/${type}-thumbnail.png`}
        className={`flex w-full h-full object-cover transition-opacity duration-1000 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
        preload="true"
        priority="true"
        fill
      />
      <div
        className={`absolute top-0 left-0 w-full h-full ${isVideoLoaded ? "visible" : "invisible"}`}
      >
        <video
          ref={videoRef}
          src={`/videos/${type}.mp4`}
          className="w-full h-full object-cover"
          preload="true"
          priority="true"
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
    </div>
  );
}
