import "./globals.css";
import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import logo from "./icons/checkLogo.png";

const martian = Martian_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Default metadata
  title: {
    default: "The Mastery Checklist",
    template: "%s | themasterychecklist.app",
  },
  applicationName: "The Mastery Checklist",
  category: "Productivity",
  classification: "Productivity",
  colorScheme: "dark light",
  creator: "Occulto Agency",
  description:
    "The web app to create rule sets that dictate your operating system.",
    publisher: "Occulto Agency",
    twitter: {
      site: "themasterychecklist.app",
      creator: "Occulto Agency",
      title: "The Mastery Checklist",
      description: "The web app to create rule sets that dictate your operating system.",
      images: {
        url: logo.src,
      },
      creatorId: "@jcbraaz",
    },
    alternates: {
      canonical: "https://themasterychecklist.app",
    },
  openGraph: {
    title: "The Mastery Checklist",
    description:
      "The web app to create rule sets that dictate your operating system.",
    url: "themasterychecklist.app",
    siteName: "The Mastery Checklist",
    type: "website",
    locale: "en_US",
    countryName: "United States of America",
    emails: ["occultoagency@gmail.com"],
    alternateLocale: ["pt_PT", "es_ES", "fr_FR", "de_DE", "en_GB"],
    images: [
      {
        url: logo.src,
        width: 512,
        height: 512,
        alt: "The Mastery Checklist Logo",
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    apple: logo.src,
    icon: logo.src,
    shortcut: logo.src,
  },
  keywords:
    "checklist, todo-list, productivity, work, multi-tasking, task, tasks, todos, to-dos, to-do, list, lists, work-life, organizating, organize, time-management, work-balance, balance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-stone-900 overflow-x-hidden" lang="en">
      <body className={`${martian.className} bg-stone-900`}>
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
