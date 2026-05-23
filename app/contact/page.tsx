import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

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
      alt="Azure Island Story Books logo"
      width={1037}
      height={375}
      className="contact-logo"
    />
  );
}

export default function ContactPage() {
  return (
    <main className="site-shell">
      <section className="content-section route-section contact-page">
        <FooterLogo />
        <div className="section-heading">
          <p className="eyebrow">Start your story</p>
          <h1 className="page-title">Contact Azure Island Story Books</h1>
          <p>
            Share the details for your child&apos;s book through the order form, or email us for
            timing, delivery, and custom request questions.
          </p>
        </div>
        <div className="contact-actions">
          <Link className="button button-primary" href="/order">
            Open Order Form
          </Link>
          <a className="button button-secondary" href="mailto:hello@azureislandstorybooks.com">
            Email Us
          </a>
        </div>
        <p className="contact-note">
          Azure Island Story Books - Personalized developmental storytelling - Okinawa, Japan
        </p>
      </section>
    </main>
  );
}
