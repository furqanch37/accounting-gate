import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./nav-bar/NavBar";
import Footer from "./footer/Footer";
import "./animations.css";
import AnimBoot from "./AnimBoot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Practice Gateway - Designed to Delight Clients. Built to Empower Accountants.",
  description: "Automate onboarding and tax workflows. Reduce client delays, ensure compliance, and win back billable time. Fully integrating into your existing systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        <AnimBoot />
        {children}
        <Footer />
      </body>
    </html>
  );
}
