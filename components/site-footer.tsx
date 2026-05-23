import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

function publicAssetExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

function FooterLogo() {
  if (!publicAssetExists("/logo_secondary.png")) {
    return (
      <div className="footer-wordmark" aria-label="Azure Island Story Books">
        Azure Island Story Books
      </div>
    );
  }

  return (
    <Image
      src="/logo_secondary.png"
      alt="Azure Island Story Books white logo"
      width={1037}
      height={375}
      className="footer-logo"
    />
  );
}

export default function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <FooterLogo />
      <p className="footer-tagline">Stories with Heart. Adventures with Purpose.</p>
      <p>Azure Island Story Books · Personalized developmental storytelling · Okinawa, Japan</p>
    </footer>
  );
}
