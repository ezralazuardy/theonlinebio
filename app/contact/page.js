"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Background from "@/components/ui/background";
import { Button } from "@/components/ui/button";
import ContactedDrawer from "@/components/ui/contacted-drawer";
import Header from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormspark } from "@formspark/use-formspark";
import { Turnstile } from "@marsidev/react-turnstile";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const faqs = [
  {
    id: "item-1",
    question: "What is The Online Bio™?",
    answer:
      "The Online Bio™ is a managed, subscription-based service that helps professionals and entrepreneurs build a unique and customized online portfolio, bio, or profile website to enhance their online presence. We craft every website carefully to ensure it stands out.",
  },
  {
    id: "item-2",
    question: "How is The Online Bio™ different from other website builders?",
    answer:
      "Unlike DIY website builders (e.g. Wordpress, Wix, or Webflow), The Online Bio™ is a fully managed service. You don't have to design or maintain anything yourself. We handle everything from design, optimization, and deployment to security and updates.",
  },
  {
    id: "item-3",
    question: "What is included in the subscription?",
    answer:
      "Your subscription covers website design, development, hosting, SSL security, and unlimited revisions. Depending on your plan, you can also get advanced SEO, branding customization, CMS (blog, e-commerce), and a professional business email.",
  },
  {
    id: "item-4",
    question: "Is there a minimum subscription period?",
    answer:
      "Yes, we require a minimum 4-month subscription to ensure quality service and long-term benefits for your online presence.",
  },
  {
    id: "item-5",
    question: "Can I use my own custom domain?",
    answer:
      "Yes! You can either use our default you.theonline.bio domain or add a custom domain for an additional $10 / month.",
  },
];

export default function Contact() {
  const pathname = usePathname();
  const [isContactedDrawerOpen, setOpenContactedDrawer] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const containerRef = useRef(null);
  const [submit, submitting] = useFormspark({
    formId: process.env.NEXT_PUBLIC_FORMSPARK_CONTACT_FORM_ID,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    // Detect Safari browser
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariBrowser);

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
        // Check if content height is greater than the container height
        const hasScroll = container.scrollHeight > container.clientHeight;
        setHasScrollbar(hasScroll);
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();

      // Check initially and on resize
      checkForScrollbar();
      window.addEventListener("resize", checkForScrollbar);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", checkForScrollbar);
      }
    };
  }, []);

  const handleOpenContactedDrawer = () => {
    setOpenContactedDrawer(true);
  };

  const handleCloseContactedDrawer = () => {
    setOpenContactedDrawer(false);
  };

  const onSubmit = async (data) => {
    if (!turnstileToken) {
      toast.warning("Please verify you're human");
      return;
    }

    try {
      await submit(data);
      toast.success("Message submitted successfully");
      reset();
      handleOpenContactedDrawer();
    } catch (error) {
      toast.error("Failed to submit your message");
    }
  };

  return (
    <>
      <div className="relative min-h-screen bg-black text-white">
        <div className="fixed inset-0 z-10">
          <Background type="cover-03" />
        </div>
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
                We would love to hear from you!
              </h1>
            </div>
            <div className="flex flex-col w-full lg:col-span-2 pt-10 lg:pt-0 ps-8 lg:ps-16 pe-8 lg:pe-20 justify-end backdrop-filter backdrop-blur-md border-t lg:border-none border-neutral-600/70">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full justify-start backdrop-filter backdrop-blur-md">
                <div className="flex flex-col w-full h-auto">
                  <div className="flex flex-col w-full h-auto grow border border-neutral-600/70 rounded-md bg-white/10 px-6 py-4">
                    <div className="flex flex-col w-full justify-start mb-6">
                      <h2 className="text-xl font-medium">Ask Us Anything</h2>
                    </div>
                    <div className="flex flex-col w-full space-y-4">
                      <div className="flex flex-col w-full">
                        <Input
                          id="name"
                          placeholder="Full Name*"
                          className="bg-white/10 placeholder:text-neutral-300 focus:outline-none focus:ring-0 focus-visible:ring-0 text-white [&::selection]:bg-white [&::selection]:text-black"
                          title="Enter your full name"
                          {...register("name", {
                            required: "Full name is required",
                            maxLength: {
                              value: 100,
                              message: "Full name must be less than 100 characters",
                            },
                          })}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="flex flex-col w-full">
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email Address*"
                          title="Enter your Email Address"
                          className="bg-white/10 placeholder:text-neutral-300 focus:outline-none focus:ring-0 focus-visible:ring-0 text-white [&::selection]:bg-white [&::selection]:text-black"
                          required
                          {...register("email", {
                            required: "Email address is required",
                            maxLength: {
                              value: 100,
                              message: "Email address must be less than 100 characters",
                            },
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address format",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="flex flex-col w-full">
                        <Textarea
                          id="message"
                          placeholder="Message*"
                          title="Enter your message"
                          className="bg-white/10 placeholder:text-neutral-300 focus:outline-none focus:ring-0 focus-visible:ring-0 text-white [&::selection]:bg-white [&::selection]:text-black max-h-[100px]"
                          {...register("message", {
                            required: "Message is required",
                            maxLength: {
                              value: 5000,
                              message: "Additional notes must be less than 5000 characters",
                            },
                          })}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-xs mt-2">{errors.message.message}</p>
                        )}
                      </div>
                      <div className="flex flex-col w-full">
                        <Turnstile
                          key={pathname}
                          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                          onSuccess={setTurnstileToken}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <Button
                      variant="secondary"
                      className="mt-5 cursor-pointer border border-neutral-600/70 backdrop-filter backdrop-blur-md bg-white/20 text-white hover:bg-white/30"
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
                        "Send Message"
                      )}
                    </Button>
                    <Button
                      variant="secondary"
                      className="mt-4 cursor-pointer border border-neutral-600/70 backdrop-filter backdrop-blur-md bg-white/20 text-white hover:bg-white/30"
                      asChild
                    >
                      <Link
                        href={process.env.NEXT_PUBLIC_APPOINTMENT_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Schedule a Meeting With Us
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col w-full h-auto border border-neutral-600/70 rounded-md bg-white/10 px-6 pt-4 pb-1">
                  <div className="flex flex-col w-full justify-start mb-2">
                    <h2 className="text-xl font-medium">Frequently Asked Questions</h2>
                  </div>
                  <div className="flex flex-col w-full">
                    <Accordion type="single" className="w-full" collapsible defaultValue="item-1">
                      {faqs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id}>
                          <AccordionTrigger className="cursor-pointer">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="w-full text-justify">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
              <div
                className={`grid grid-cols-1 mt-8 mb-12 w-full justify-start ${isSafari ? "mb-28 lg:mb-12" : "mb-12"}`}
              >
                <p className="text-sm font-regular text-neutral-300">
                  By submitting to our contact form, you agree to our{" "}
                  <Link
                    href="https://www.lazuardy.tech/legal/privacy-policy"
                    className="text-white hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.lazuardy.tech/legal/terms-of-service"
                    className="text-white hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </Link>
                  .
                  <br />
                  In addition, you may contact us at{" "}
                  <Link href="mailto:hello@theonline.bio" className="text-white hover:underline">
                    hello@theonline.bio
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ContactedDrawer open={isContactedDrawerOpen} onClose={handleCloseContactedDrawer} />
    </>
  );
}
