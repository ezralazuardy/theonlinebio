"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Background() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isVideoLoaded && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, [isVideoLoaded]);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      {!isVideoLoaded && (
        <Image
          src="/images/cover-thumbnail.png"
          alt="Cover Thumbnail"
          quality={100}
          className={`object-cover opacity-0 transition-opacity duration-1000 ${
            isImageLoaded ? "opacity-40" : "opacity-0"
          }`}
          fill
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
      )}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 opacity-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-40" : "opacity-0"
        }`}
        src="/videos/cover.mp4"
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoaded}
      />
    </div>
  );
}
