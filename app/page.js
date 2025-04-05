import Background from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import InquiryForm from "@/components/ui/inquiry-form";
import Showcase, { ShowcaseLabel } from "@/components/ui/showcase";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 z-10">
        <Background type="cover-01" />
      </div>
      <div className="fixed z-30">
        <Header />
      </div>
      <main className="absolute z-20 bottom-0 left-0 w-full min-h-screen justify-end overflow-y overflow-x-hidden flex flex-col">
        <div className="flex w-full justify-center px-8 lg:px-20">
          <h1 className="text-4xl lg:text-6xl font-light leading-tight lg:max-w-4xl">
            In these digital era, your online presence matters the most.
          </h1>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 w-full">
          <div className="flex flex-col w-full order-last lg:order-first">
            <Showcase />
          </div>
          <div className="flex flex-col w-full">
            <ShowcaseLabel className="invisible" />
            <div className="lg:min-h-48 flex flex-col w-full py-8 lg:py-10 ps-8 lg:ps-16 pe-8 lg:pe-20 justify-center backdrop-filter backdrop-blur-md border-t border-neutral-600/70">
              <p className="text-sm text-justify mb-6">
                We craft unique and professional online portfolios, bios, and profile websites that
                help Professionals and Entrepreneurs stand out and connect with their audience.
              </p>
              <div className="flex w-full lg:space-x-4">
                <div className="flex w-full">
                  <InquiryForm />
                </div>
                <div className="hidden lg:flex w-full">
                  <span className="mt-2 mr-4 text-sm">or</span>
                  <Button variant="secondary" asChild>
                    <Link
                      href={process.env.NEXT_PUBLIC_APPOINTMENT_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Talk to Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
