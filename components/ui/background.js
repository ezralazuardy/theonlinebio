"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Background() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      setTimeout(() => {
        // Add multiple event listeners to ensure video loading is detected
        const video = videoRef.current;

        const handleLoaded = () => {
          console.log("Video loaded event triggered");
          setIsVideoLoaded(true);
        };

        video.addEventListener("loadeddata", handleLoaded);
        video.addEventListener("loadedmetadata", handleLoaded);
        video.addEventListener("canplay", handleLoaded);

        // Attempt to play when component mounts
        if (video.readyState >= 3) {
          // HAVE_FUTURE_DATA or higher
          handleLoaded();
        }

        video.play().catch((error) => {
          console.error("Video playback failed:", error);
        });
      }, 1000);

      return () => {
        // Clean up event listeners
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
          src="/images/cover-thumbnail.png"
          alt="Cover Thumbnail"
          quality={100}
          className={`object-cover opacity-0 transition-opacity duration-1000 ${
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
        src="/videos/cover.mp4"
        preload="auto"
        loop
        muted
        playsInline
        autoPlay
      />
    </div>
  );
}
