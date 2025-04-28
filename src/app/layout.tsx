import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataProvider from "@/Providers/DataProvider";
import NextAuthProvider from "@/Providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Avocado ",
  description: "Fresh avocados and groceries, handpicked for quality and freshness daily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
        <DataProvider>
        <Navbar/>
        {children}
        <Toaster />
        <Footer/>
        </DataProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
