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
      let hasLoaded = false;
      let playAttempts = 0;
      const maxPlayAttempts = 5;

      const handleLoaded = () => {
        if (hasLoaded) return; // Prevent multiple executions
        hasLoaded = true;

        setTimeout(() => {
          setIsVideoLoaded(true);
        }, 1100);

        // Function to attempt playing with exponential backoff
        const attemptToPlay = () => {
          if (playAttempts >= maxPlayAttempts) {
            console.error("Max play attempts reached for Safari");
            return;
          }

          playAttempts++;

          // For Safari, try to load the video first
          video.load();

          console.log(`Attempt ${playAttempts} to play video`);
          const playPromise = video.play();

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.error(`Video playback failed (attempt ${playAttempts}):`, error);

              // Retry with exponential backoff
              const backoffTime = 1000 * Math.pow(2, playAttempts - 1);
              console.log(`Retrying in ${backoffTime}ms`);

              setTimeout(attemptToPlay, backoffTime);

              // Also try with user interaction for Safari
              document.addEventListener(
                "click",
                function playVideoOnce() {
                  video.play().catch((e) => console.error("Play on click failed:", e));
                  document.removeEventListener("click", playVideoOnce);
                },
                { once: true }
              );
            });
          }
        };

        // Start first attempt after delay
        setTimeout(attemptToPlay, 2000); // Increased timeout for Safari
      };

      // Add more events for Safari compatibility
      video.addEventListener("loadeddata", handleLoaded);
      video.addEventListener("loadedmetadata", handleLoaded);
      video.addEventListener("canplay", handleLoaded);
      video.addEventListener("canplaythrough", handleLoaded);

      // Force preload for Safari
      video.preload = "auto";

      // Try to manually trigger load in Safari
      try {
        video.load();
      } catch (e) {
        console.error("Video load failed:", e);
      }

      if (video.readyState >= 3) {
        handleLoaded();
      }

      return () => {
        video.removeEventListener("loadeddata", handleLoaded);
        video.removeEventListener("loadedmetadata", handleLoaded);
        video.removeEventListener("canplay", handleLoaded);
        video.removeEventListener("canplaythrough", handleLoaded);
      };
    }
  }, []);

  return (
    <div className="relative z-10 w-full h-full bg-black">
      <Image
        onLoad={() => setIsImageLoaded(true)}
        alt="Cover Thumbnail"
        src={`/videos/${type}-thumbnail.jpg`}
        className={`flex w-full h-full object-cover transition-opacity duration-1000 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
        preload="auto"
        priority="true"
        quality={100}
        fill
      />
      <div
        className={`absolute top-0 left-0 w-full h-full ${isVideoLoaded ? "visible" : "invisible"}`}
      >
        <video
          suppressHydrationWarning
          ref={videoRef}
          src={`/videos/${type}.mp4`}
          className="w-full h-full object-cover"
          preload="auto"
          priority="true"
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
    </div>
  );
}
