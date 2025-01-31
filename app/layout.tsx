import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/client/navbar/navbar";

export const metadata: Metadata = {
  title: process.env.WEBSITE_TITLE,
  description: "Бързи качествени тапицерски услуги",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
