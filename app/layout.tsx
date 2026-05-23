import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "../components/site-header";
import SiteFooter from "../components/site-footer";
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
  title: "Azure Island Story Books — Personalized children's books from Okinawa",
  description:
    "Stories with Heart. Adventures with Purpose. Personalized developmental children's storybooks handcrafted in Okinawa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="site-shell">
          <SiteHeader />
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
