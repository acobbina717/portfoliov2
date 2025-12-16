import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Geist, Geist_Mono } from "next/font/google";
import { theme } from "../theme";
import { Navigation } from "@/components/Navigation";
import { BackgroundEffects } from "@/components/BackgroundEffects";

// Mantine core styles
import "@mantine/core/styles.css";
// Global styles
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio built with Next.js and Mantine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <BackgroundEffects />
          <Navigation />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
