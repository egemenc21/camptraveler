import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Inter} from 'next/font/google'

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets:['latin'],
  display: 'swap'
})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Navbar/>
    <main className="overflow-hidden relative">{children}</main>
    <Footer/>
    </body>
    </html>
  );
}
