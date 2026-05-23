import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
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
  title: "Azure Island Story Books",
  description: "Personalized children's storybooks handcrafted in Okinawa.",
};

function publicAssetExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

function HeaderLogo() {
  if (!publicAssetExists("/logo_primary.png")) {
    return (
      <div className="logo-placeholder" aria-label="Azure Island Story Books logo placeholder">
        <span>Azure Island</span>
        <strong>Story Books</strong>
      </div>
    );
  }

  return (
    <Image
      src="/logo_primary.png"
      alt="Azure Island Story Books logo"
      width={1457}
      height={646}
      priority
      className="header-logo"
      sizes="(max-width: 768px) 100vw, 768px"
    />
  );
}

function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" aria-label="Azure Island Story Books home">
        <HeaderLogo />
      </Link>
      <nav className="header-nav" aria-label="Primary navigation">
        <Link href="/stories">Stories</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

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
        <Header />
        {children}
      </body>
    </html>
  );
}
