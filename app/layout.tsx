import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yasah Sai Chandra Borusu — Portfolio",
  description:
    "Founding Software Engineer & CS Student at George Mason University. Building with React, TypeScript, Python, and AWS.",
  keywords: ["portfolio", "founding engineer", "full stack developer", "React", "TypeScript", "Python", "AWS"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}