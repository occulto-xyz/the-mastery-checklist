import "./globals.css";
import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

const martian = Martian_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Default metadata
  title: {
    default: "The Checklist",
    template: "%s | thechecklist.app",
  },
  description:
    "The web app to create rule sets that dictate your operating system.",
  openGraph: {
    title: "The Checklist",
    description:
      "The web app to create rule sets that dictate your operating system.",
    url: "thechecklist.app",
    siteName: "The Checklist",
    type: "website",
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
    apple: "/icons/checkLogo.png",
    icon: "/icons/checkLogo.png",
    shortcut: "/favicon.ico",
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
    <html lang="en">
      <body className={`${martian.className} bg-stone-900`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
