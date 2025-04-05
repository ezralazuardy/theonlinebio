"use client";

import Background from "@/components/ui/background";
import Header from "@/components/ui/header";
import InquiryDrawer from "@/components/ui/inquiry-drawer";
import { ArrowRight, AtSign, Check, Globe } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [openInquiryDrawer, setOpenInquiryDrawer] = useState(false);

  const handleOpenInquiryDrawer = () => {
    setOpenInquiryDrawer(true);
  };

  const handleCloseInquiryDrawer = () => {
    setOpenInquiryDrawer(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Background type="cover-02" />
      </div>
      <div className="absolute z-10">
        <Header />
      </div>
      <main className="absolute z-0 bottom-0 left-0 w-full h-full flex flex-col">
        <div className="grid grid-cols-3 w-full h-full">
          <div className="flex flex-col w-full border-r border-neutral-600/70 justify-end items-start px-20">
            <h1 className="pb-10 text-6xl font-light leading-tight">
              Those who seeks value, price comes in second.
            </h1>
          </div>
          <div className="flex flex-col w-full col-span-2 pl-16 pe-20 justify-end backdrop-filter backdrop-blur-md">
            <div className="grid grid-cols-2 gap-8 w-full justify-start">
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
                      <h2 className="text-md font-medium">$40 / mo</h2>
                    </div>
                  </div>
                  <p className="text-sm font-regular text-neutral-300 mb-4">
                    Best for starter individuals.
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>Limited design reference options</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>Mobile responsive design</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>Basic search engine optimization</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>Deploy to you.theonline.bio domain</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>SSL &amp; Firewall Security</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular">
                    <Check className="size-4 mt-0.5" />
                    <span>Literally ∞ web pages and revisions</span>
                  </p>
                </div>
              </div>
              <div
                onClick={handleOpenInquiryDrawer}
                className="transition-all duration-500 hover:scale-105 cursor-pointer flex flex-col w-full h-auto"
              >
                <div className="flex w-full">
                  <div className="flex flex-col w-auto h-auto rounded-t-md bg-white px-6 py-2 text-xs text-black font-bold text-start leading-none uppercase">
                    Limited-Time Offer
                  </div>
                </div>
                <div className="transition-all duration-500 hover:bg-white/20 flex flex-col w-full h-auto border border-white rounded-tr-md rounded-b-md bg-white/10 px-6 py-4">
                  <div className="grid grid-cols-2 w-full">
                    <div className="flex justify-start mb-2">
                      <h2 className="text-xl font-medium">Pro</h2>
                    </div>
                    <div className="flex justify-end">
                      <h2 className="text-md font-medium line-through mr-2">$75 / mo</h2>
                      <ArrowRight className="size-4 mr-2 mt-1" />
                      <h2 className="text-md font-medium">$50 / mo</h2>
                    </div>
                  </div>
                  <p className="text-sm font-regular text-neutral-300 mb-4">
                    Who dare to grow bigger.
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>All basic features</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>Custom design reference options</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>Advanced search engine optimization</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>Advanced support availability (24/7)</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular mb-2">
                    <Check className="size-4 mt-0.5" />
                    <span>CMS (Blog, E-Commerce)</span>
                  </p>
                  <p className="flex space-x-2 text-sm font-regular">
                    <Check className="size-4 mt-0.5" />
                    <span>Business email address (you@theonline.bio)</span>
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
                    <p className="flex space-x-2 text-sm font-regular mb-2">
                      <Globe className="size-4 mt-0.5" />
                      <span>Custom domain (e.g. yourdomain.com)</span>
                    </p>
                    <p className="flex space-x-2 text-sm font-regular">
                      <AtSign className="size-4 mt-0.5" />
                      <span>Custom business email address (e.g. you@yourdomain.com)</span>
                    </p>
                  </div>
                  <div className="flex flex-col w-full font-medium">
                    <p className="flex space-x-2 text-sm font-regular mb-2">
                      <span>+ $10 / mo</span>
                    </p>
                    <p className="flex space-x-2 text-sm font-regular">
                      <span>+ $10 / mo</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-8 mb-12 w-full justify-start">
              <p className="text-sm font-regular text-neutral-300">
                All prices are exclusive of 10% taxes. With a minimum subscription period of 4
                months.
                <br />
                Development phase took at least 7 work days, depends on your requirements.
              </p>
            </div>
          </div>
        </div>
      </main>
      <InquiryDrawer open={openInquiryDrawer} onClose={handleCloseInquiryDrawer} />
    </div>
  );
}
