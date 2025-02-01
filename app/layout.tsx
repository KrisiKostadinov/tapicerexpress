import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";

import "./globals.css";
import Navbar from "@/components/client/navbar/navbar";
import Footer from "@/components/client/footer/footer";

export const metadata: Metadata = {
  title: process.env.WEBSITE_TITLE,
  description: "Бързи качествени тапицерски услуги",
  keywords:
    "тапицерски услуги, претапициране на мебели, ремонт на мебели, авто тапицерия, реставрация на мебели, тапициране на столове, тапициране на дивани",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className="w-full h-screen bg-gray-100">
        <Suspense>
          <ToastContainer position="top-center" />
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}