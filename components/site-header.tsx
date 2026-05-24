import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Stories", href: "/stories" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Every Occasion", href: "/occasions" },
  { label: "Sample Stories", href: "/samples" },
  { label: "Order", href: "/order" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/#contact" },
];

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

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-mark" aria-label="Azure Island Story Books home">
        <HeaderLogo />
      </Link>
      <nav className="header-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
