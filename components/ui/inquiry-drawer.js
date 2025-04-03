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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormspark } from "@formspark/use-formspark";
import { Turnstile } from "@marsidev/react-turnstile";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "sonner";

export default function InquiryDrawer({ open, onClose }) {
  const pathname = usePathname();
  const [isFormDrawerOpen, setFormDrawerOpen] = useState(false);
  const [isSubmittedDrawerOpen, setSubmittedDrawerOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_INQUIRY_FORM_ID,
  });
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      profession: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const onSubmit = async (data) => {
    if (!turnstileToken) {
      toast.warning("Please verify you're human.");
      return;
    }

    try {
      await submit(data);
      toast.success("Inquiry submitted successfully.");
      setFormDrawerOpen(false);
      setSubmittedDrawerOpen(true);
      setPhoneNumber("");
      reset();
    } catch (error) {
      toast.error("Failed to submit the message.");
    }
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
    setValue("phone", String(value));
  };

  const handleCloseFormDrawer = () => {
    onClose();
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <style jsx global>{`
          .country.highlight,
          .country:hover {
            background-color: #222222 !important;
          }
        `}</style>
        <Drawer
          direction="right"
          open={isFormDrawerOpen || open}
          onOpenChange={setFormDrawerOpen}
          onClose={handleCloseFormDrawer}
        >
          <DrawerContent className="bg-black border-none outline-none overflow-x-hidden overflow-y-auto">
            <div className="h-full w-full grow p-5 flex flex-col">
              <DrawerHeader>
                <DrawerTitle className="text-white font-medium text-2xl ps-1 pe-2">
                  Submit Inquiry
                </DrawerTitle>
                <DrawerDescription className="mt-2 ps-1 pe-2">
                  You&apos;re a few step away from making your own profile website. Please tell us
                  more about who you are and what you need.
                </DrawerDescription>
              </DrawerHeader>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full px-4 my-4 space-y-5"
              >
                <div className="grid grid-cols-2 gap-4 w-full ps-1 pe-2">
                  <div className="flex flex-col w-full">
                    <Input
                      id="first_name"
                      placeholder="First Name*"
                      className="focus:outline-none focus:ring-0 focus-visible:ring-0 text-white [&::selection]:bg-white [&::selection]:text-black"
                      title="Enter your First Name"
                      {...register("first_name", {
                        required: "First name is required",
                        maxLength: {
                          value: 100,
                          message: "First name must be less than 100 characters",
                        },
                      })}
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-xs mt-2">{errors.first_name.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <Input
                      id="last_name"
                      placeholder="Last Name*"
                      className="focus:outline-none focus:ring-0 focus-visible:ring-0 text-white [&::selection]:bg-white [&::selection]:text-black"
                      title="Enter your Last Name"
                      {...register("last_name", {
                        required: "Last name is required",
                        maxLength: {
                          value: 100,
                          message: "Last name must be less than 100 characters",
                        },
                      })}
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-xs mt-2">{errors.last_name.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col w-full ps-1 pe-2">
                  <Input
                    id="profession"
                    placeholder="Profession (e.g. Designer, Architect)*"
                    className="focus:outline-none focus:ring-0 focus-visible:ring-0 text-white [&::selection]:bg-white [&::selection]:text-black"
                    title="Enter your Profession"
                    {...register("profession", {
                      required: "Profession is required",
                      maxLength: {
                        value: 500,
                        message: "Profession must be less than 500 characters",
                      },
                    })}
                  />
                  {errors.profession && (
                    <p className="text-red-500 text-xs mt-2">{errors.profession.message}</p>
                  )}
                </div>
                <div className="flex flex-col w-full ps-1 pe-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address*"
                    title="Enter your Email Address"
                    className="focus:outline-none focus:ring-0 focus-visible:ring-0 text-white [&::selection]:bg-white [&::selection]:text-black"
                    required
                    {...register("email", {
                      required: "Email address is required",
                      maxLength: {
                        value: 100,
                        message: "Email address must be less than 100 characters",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>
                  )}
                </div>
                <div className="flex flex-col w-full ps-1 pe-2">
                  <PhoneInput
                    country={"id"}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    inputProps={{
                      name: "phone",
                      required: false,
                      className:
                        "focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-neutral-400 text-white bg-black w-full py-2 ps-14 ps-1 pe-2 border border-white rounded-md",
                      placeholder: "Phone Number (WhatsApp)*",
                      title: "Enter your phone number with country code",
                    }}
                    containerClass="w-full"
                    dropdownClass="bg-black text-white"
                    buttonClass="bg-black border border-white rounded-md"
                    buttonStyle={{
                      backgroundColor: "black",
                      borderColor: "#ffffff",
                      borderTopLeftRadius: "8px",
                      borderBottomLeftRadius: "8px",
                    }}
                    dropdownStyle={{
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "#ffffff",
                    }}
                    searchClass="text-white bg-black"
                    searchStyle={{
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "#ffffff",
                    }}
                    countriesClass="text-white"
                    countryCodeEditorClass="text-white bg-black"
                    countryCodeStyle={{
                      backgroundColor: "black",
                      color: "white",
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col w-full ps-1 pe-2">
                  <Textarea
                    id="notes"
                    placeholder="Additional notes (Optional)"
                    title="Enter your additional notes"
                    className="focus:outline-none focus:ring-0 focus-visible:ring-0 text-white [&::selection]:bg-white [&::selection]:text-black"
                    {...register("notes", {
                      maxLength: {
                        value: 5000,
                        message: "Additional notes must be less than 5000 characters",
                      },
                    })}
                  />
                  {errors.notes && (
                    <p className="text-red-500 text-xs mt-2">{errors.notes.message}</p>
                  )}
                </div>
                <div className="flex flex-col w-full ps-1">
                  <Turnstile
                    key={pathname}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onSuccess={setTurnstileToken}
                  />
                </div>
              </form>
              <DrawerFooter>
                <Button
                  variant="secondary"
                  className="cursor-pointer ms-1 me-2"
                  onClick={handleSubmit(onSubmit)}
                  disabled={submitting || !turnstileToken}
                >
                  {submitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
                <Button variant="secondary" className="cursor-pointer ms-1 me-2" asChild>
                  <Link
                    href={process.env.NEXT_PUBLIC_APPOINTMENT_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a Meeting Instead
                  </Link>
                </Button>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
        <Drawer
          direction="right"
          opem={isSubmittedDrawerOpen}
          onOpenChange={setSubmittedDrawerOpen}
        >
          <DrawerContent className="bg-black border-none outline-none overflow-x-hidden overflow-y-auto">
            <div className="w-full h-full">
              <div className="h-full w-full grow flex flex-col">
                <div className="flex flex-col w-full">
                  <Image
                    src="/images/submitted-drawer-cover.png"
                    alt="Inquiry Submitted"
                    className="w-full h-96 object-cover mb-5"
                    width={200}
                    height={100}
                  />
                </div>
                <DrawerHeader className="px-10">
                  <DrawerTitle className="text-white font-medium text-xl">
                    We&apos;ve Received Your Inquiry!
                  </DrawerTitle>
                  <DrawerDescription className="mt-2">
                    Your profile website is now planned to be created. Sit down and relax,
                    we&apos;ll get back to you shortly in the next 24 hours.
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="px-10">
                  <DrawerClose asChild>
                    <Button variant="secondary" className="cursor-pointer">
                      Okay, I&apos;ll Wait
                    </Button>
                  </DrawerClose>
                  <Button variant="secondary" className="cursor-pointer" asChild>
                    <Link
                      href={process.env.NEXT_PUBLIC_APPOINTMENT_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schedule a Meeting Directly
                    </Link>
                  </Button>
                </DrawerFooter>
                clas
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
