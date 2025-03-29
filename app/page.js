import Background from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { SubscribeButton } from "@/components/ui/subscribe-button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      <div className="absolute z-10">
        <Header />
      </div>
      <main className="absolute z-10 bottom-0 left-0 w-full flex flex-col">
        <div className="flex w-full justify-center">
          <h1 className="[text-shadow:_0_4px_8px_#000000] text-[#FFFFFF] pb-10 text-6xl font-light leading-tight max-w-4xl">
            In these Digital Era, your online presence matters the most.
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
              We help Professionals and Entrepreneurs build their online
              presence, grow their business, and reach their target audience.
              Are you ready to make an online portfolio or bio that stands out?
              Let&apos;s get started!
            </p>
            <div className="flex space-x-4">
              <SubscribeButton />
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
