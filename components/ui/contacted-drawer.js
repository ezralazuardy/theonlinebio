"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import Image from "next/image";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";

export default function ContactedDrawer({ open, onClose }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleCloseDrawer = () => {
    onClose();
  };

  return (
    <Drawer
      direction="right"
      open={isDrawerOpen || open}
      onOpenChange={setDrawerOpen}
      onClose={handleCloseDrawer}
    >
      <DrawerContent className="bg-black border-none outline-none overflow-x-hidden overflow-y-auto">
        <div className="w-full h-full">
          <div className="h-full w-full grow flex flex-col">
            <div className="flex flex-col w-full">
              <Image
                src="/images/contacted-drawer-cover.png"
                alt="Message Submitted"
                className="w-full h-96 object-cover mb-5"
                width={200}
                height={100}
              />
            </div>
            <DrawerHeader className="px-10">
              <DrawerTitle className="text-white font-medium text-xl">
                We&apos;ve Received Your Message!
              </DrawerTitle>
              <DrawerDescription className="mt-2 text-justify">
                Thank you for reaching out to us. We appreciate your interest in
                our services and will be in touch with you shortly.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter className="px-10 mb-5">
              <DrawerClose asChild>
                <Button variant="secondary" className="cursor-pointer">
                  Okay, Got It!
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
