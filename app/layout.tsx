import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppHeader from "./components/header/Header";



import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import SessionWrapper from "./components/sessionWrapper/SessionWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en" data-theme="nord">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AppHeader />
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
