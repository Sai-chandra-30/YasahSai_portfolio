import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yasah Sai Chandra Borusu — Portfolio",
  description:
    "Full Stack Developer & CS Student at George Mason University. Building with React, TypeScript, Python, and AWS.",
  keywords: ["portfolio", "full stack developer", "React", "TypeScript", "Python", "AWS"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-gray-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
