import ComponentProvider from "@/components/provider/component-provider";
import VercelProvider from "@/components/provider/vercel-provider";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  title: "The Online Bio™",
  description: "Your only place for an online bio.",
  generator: "Next.js",
  applicationName: "The Online Bio™",
  referrer: "strict-origin-when-cross-origin",
  creator: "Lazuardy",
  publisher: "Lazuardy",
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}/manifest.json`,
  category:
    "bio, biography, portfolio, showcase, gallery, cv, profile, website, blog, resume, personal, developer, designer",
  keywords: [
    "bio",
    "biography",
    "portfolio",
    "showcase",
    "gallery",
    "cv",
    "profile",
    "website",
    "blog",
    "resume",
    "personal",
    "developer",
    "designer",
    "lazuardy",
  ],
  authors: [{ name: "Lazuardy", url: "https://www.lazuardy.tech" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: [{ color: "#000000" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-title" content="The Online Bio™" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ComponentProvider />
        <VercelProvider />
      </body>
    </html>
  );
}
