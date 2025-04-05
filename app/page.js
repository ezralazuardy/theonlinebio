import Background from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import InquiryForm from "@/components/ui/inquiry-form";
import Showcase, { ShowcaseLabel } from "@/components/ui/showcase";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Background type="cover-01" />
      </div>
      <div className="absolute z-10">
        <Header />
      </div>
      <main className="absolute z-10 bottom-0 left-0 w-full flex flex-col">
        <div className="flex w-full justify-center">
          <h1 className="text-4xl lg:text-6xl font-light leading-tight lg:max-w-4xl px-10 lg:px-0">
            In these digital era, your online presence matters the most.
          </h1>
        </div>
        <div className="relative grid lg:grid-cols-2 w-full">
          <div className="hidden lg:flex flex-col w-full">
            <Showcase />
          </div>
          <div className="flex flex-col w-full">
            <ShowcaseLabel className="invisible" />
            <div className="lg:min-h-48 flex flex-col w-full py-8 lg:py-10 pl-10 lg:pl-16 pe-10 lg:pe-20 justify-center backdrop-filter backdrop-blur-md border-t border-neutral-600/70">
              <p className="text-sm text-justify mb-6">
                We craft unique and professional online portfolios, bios, and profile websites that
                help Professionals and Entrepreneurs stand out and connect with their audience.
              </p>
              <div className="flex w-full lg:space-x-4">
                <div className="flex w-full">
                  <InquiryForm />
                </div>
                <div className="hidden lg:flex w-full">
                  <span className="mt-2 text-sm">or</span>
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
