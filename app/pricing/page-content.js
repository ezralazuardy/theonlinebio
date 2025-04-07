"use client";

import Header from "@/components/ui/header";
import InquiryDrawer from "@/components/ui/inquiry-drawer";
import { isSafariBrowser } from "@/lib/utils";
import { ArrowRight, AtSign, Check, CloudUpload, Globe, Server } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PricingContent() {
  const [openInquiryDrawer, setOpenInquiryDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const [isBrowserChecked, setBrowserChecked] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isBrowserChecked) {
      setIsSafari(isSafariBrowser());
      setBrowserChecked(true);
    }

    const container = containerRef.current;

    const handleScroll = () => {
      if (container && container.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const checkForScrollbar = () => {
      if (container) {
        const hasScroll = container.scrollHeight > container.clientHeight;
        setHasScrollbar(hasScroll);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
      checkForScrollbar();
      window.addEventListener("resize", checkForScrollbar);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkForScrollbar);
      }
    };
  }, [isBrowserChecked]);

  const handleOpenInquiryDrawer = () => {
    setOpenInquiryDrawer(true);
  };

  const handleCloseInquiryDrawer = () => {
    setOpenInquiryDrawer(false);
  };

  return (
    <>
      <div className="fixed z-30">
        <Header isScrolled={isScrolled} hasScrollbar={hasScrollbar} />
      </div>
      <main
        ref={containerRef}
        className="absolute z-20 bottom-0 left-0 w-full h-full overflow-y overflow-x-hidden flex flex-col"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full">
          <div className="flex flex-col w-full border-r border-neutral-600/70 justify-end items-start px-8 lg:px-20">
            <h1 className="mt-[25.5vh] mb-8 lg:mb-10 text-4xl lg:text-6xl font-light leading-tight">
              Those who seek value, price comes second.
            </h1>
          </div>
          <div className="flex flex-col w-full lg:col-span-2 pt-10 lg:pt-0 ps-8 lg:ps-16 pe-8 lg:pe-20 justify-end backdrop-filter backdrop-blur-md border-t border-b lg:border-none border-neutral-600/70">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 w-full justify-center lg:justify-start">
              <div
                onClick={handleOpenInquiryDrawer}
                className="transition-all duration-500 hover:scale-105 cursor-pointer flex flex-col w-full h-auto"
              >
                <div className="flex w-full invisible">
                  <div className="flex w-auto h-auto rounded-t-md bg-white px-6 py-2 text-xs text-black font-bold text-start leading-none uppercase">
                    Limited-Time Offer
                  </div>
                </div>
                <div className="transition-all duration-500 hover:bg-white/20 flex flex-col w-full h-auto border border-neutral-600/70 rounded-t-md rounded-b-md bg-white/10 px-6 py-4">
                  <div className="grid grid-cols-2 w-full">
                    <div className="flex justify-start mb-2">
                      <h2 className="text-xl font-medium">Basic</h2>
                    </div>
                    <div className="flex justify-end">
                      <h2 className="text-md font-mono">IDR 3 mil</h2>
                    </div>
                  </div>
                  <p className="text-sm font-regular text-neutral-300 mb-4">
                    Best for starter individuals.
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>Limited design reference options</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>Mobile responsive design</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>Basic SEO, Security, and Firewall</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>Deploy to you.theonline.bio domain</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>Added 4 months of server lifetime</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular">
                    <Check className="size-4" />
                    <span>Max 2× revision and ∞ web pages</span>
                  </p>
                </div>
              </div>
              <div
                onClick={handleOpenInquiryDrawer}
                className="transition-all duration-500 hover:scale-105 cursor-pointer flex flex-col w-full h-auto order-first lg:order-last"
              >
                <div className="flex w-full">
                  <div className="flex flex-col w-auto h-auto rounded-t-md bg-white px-6 py-2 text-xs text-black font-bold text-start leading-none uppercase">
                    Limited-Time Offer
                  </div>
                </div>
                <div className="transition-all duration-500 hover:bg-white/20 flex flex-col w-full h-auto border border-white rounded-tr-md rounded-b-md bg-white/10 px-6 py-4">
                  <div className="grid grid-cols-3 w-full">
                    <div className="flex justify-start mb-2">
                      <h2 className="text-xl font-medium">Pro</h2>
                    </div>
                    <div className="flex justify-end col-span-2">
                      <h2 className="text-md font-medium font-mono line-through mr-2">IDR 5 mil</h2>
                      <ArrowRight className="size-4 mr-2 mt-1" />
                      <h2 className="text-md font-mono">IDR 4 mil</h2>
                    </div>
                  </div>
                  <p className="text-sm font-regular text-neutral-300 mb-4">
                    Who dare to grow bigger.
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>All basic features</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>Custom design reference options</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>Advanced SEO, Security, and Firewall</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>Advanced support availability (24/7)</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular mb-2">
                    <Check className="size-4" />
                    <span>CMS (Blog, E-Commerce)</span>
                  </p>
                  <p className="flex space-x-2 text-xs font-regular">
                    <Check className="size-4" />
                    <span>Max 5× revision and ∞ web pages</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-8 w-full justify-start backdrop-filter backdrop-blur-md">
              <div
                onClick={handleOpenInquiryDrawer}
                className="transition-all duration-500 hover:scale-105 hover:bg-white/20 cursor-pointer flex flex-col w-full h-auto border border-neutral-600/70 rounded-md bg-white/10 px-6 py-4"
              >
                <div className="grid grid-cols-2 w-full">
                  <div className="flex justify-start mb-2">
                    <h2 className="text-xl font-medium">Add-On</h2>
                  </div>
                  <div className="flex justify-end">
                    <h2 className="text-md font-medium">Additional</h2>
                  </div>
                </div>
                <p className="text-sm font-regular text-neutral-300 mb-4">
                  Some additional features you may want to consider.
                </p>
                <div className="grid grid-cols-3 w-full">
                  <div className="col-span-2 flex flex-col w-full">
                    <p className="flex space-x-2 text-xs font-regular mb-2">
                      <Globe className="size-4" />
                      <span>Custom domain</span>
                      <span className="hidden lg:flex">(e.g. yourdomain.com)</span>
                    </p>
                    <p className="flex space-x-2 text-xs font-regular mb-2">
                      <AtSign className="size-4" />
                      <span>Custom email address</span>
                      <span className="hidden lg:flex">(e.g. you@yourdomain.com)</span>
                    </p>
                    <p className="flex space-x-2 text-xs font-regular mb-2">
                      <Server className="size-4" />
                      <span>Extend server lifetime</span>
                    </p>
                    <p className="flex space-x-2 text-xs font-regular">
                      <CloudUpload className="size-4" />
                      <span>Add revision or update (minor change)</span>
                    </p>
                  </div>
                  <div className="flex flex-col w-full font-medium">
                    <p className="flex space-x-2 text-xs font-regular mb-2 justify-end lg:justify-start">
                      <span>+ IDR 500k / year</span>
                    </p>
                    <p className="flex space-x-2 text-xs font-regular mb-2 justify-end lg:justify-start">
                      <span>+ IDR 500k / 4 months</span>
                    </p>
                    <p className="flex space-x-2 text-xs font-regular mb-2 justify-end lg:justify-start">
                      <span>+ IDR 100k / 4 months</span>
                    </p>
                    <p className="flex space-x-2 text-xs font-regular justify-end lg:justify-start">
                      <span>+ IDR 150k / 4 revision</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`grid grid-cols-1 mt-8 mb-8 lg:mb-12 w-full justify-start ${isSafari ? "mb-28 lg:mb-12" : "mb-12"}`}
            >
              <p className="text-sm lg:text-xs font-regular text-neutral-300 text-justify lg:text-left">
                All prices are exclusive of 10% taxes. With a minimum subscription period of 4
                months. <br className="hidden lg:flex" />
                Development phase took at least 7 work days, depends on your requirements.
              </p>
            </div>
          </div>
        </div>
      </main>
      <InquiryDrawer open={openInquiryDrawer} onClose={handleCloseInquiryDrawer} />
    </>
  );
}
