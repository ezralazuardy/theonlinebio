import Background from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import InquiryForm from "@/components/ui/inquiry-form";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Background type="cover-1" />
      </div>
      <div className="absolute z-10">
        <Header />
      </div>
      <main className="absolute z-10 bottom-0 left-0 w-full flex flex-col">
        <div className="flex w-full justify-center">
          <h1 className="pb-10 text-6xl font-light leading-tight max-w-4xl">
            In these digital era, your online presence matters the most.
          </h1>
        </div>
        <div className="grid grid-cols-2 w-full min-h-52 border-t border-neutral-600/70">
          <div className="flex space-x-6 w-full border-r border-neutral-600/70 justify-center items-center backdrop-filter backdrop-blur-md">
            <div className="aspect-video w-auto h-24 bg-neutral-600 rounded-sm"></div>
            <div className="aspect-video w-auto h-24 bg-neutral-600 rounded-sm"></div>
            <div className="aspect-video w-auto h-24 bg-neutral-600 rounded-sm"></div>
          </div>
          <div className="flex flex-col w-full py-10 pl-16 pe-20 justify-center backdrop-filter backdrop-blur-md">
            <p className="text-sm text-justify mb-6">
              We craft unique and professional online portfolios, bios, and profile websites that
              help Professionals and Entrepreneurs stand out and connect with their audience.
            </p>
            <div className="flex space-x-4">
              <InquiryForm />
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
      </main>
    </div>
  );
}
