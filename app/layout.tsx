import type { Metadata } from "next";
import { Bebas_Neue, Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const bebasneue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Life & Sole",
  description: "health and fitness",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
