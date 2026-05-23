import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const trustItems = [
  {
    title: "3-Day Lead Time",
    copy: "Every book is carefully crafted and managed to maintain quality and storytelling care.",
  },
  {
    title: "Complimentary Local Delivery",
    copy: "Onna, Kadena Air Base, and surrounding Okinawa areas.",
  },
  {
    title: "Every Edition Matters",
    copy: "No cheap versions. Every storybook is designed with the same care, warmth, and craftsmanship.",
  },
];

const previews = [
  {
    src: "/preview-1.png",
    alt: "Preview page from Dominick's Amazing Adventure storybook",
  },
  {
    src: "/preview-2.png",
    alt: "Second preview page from Dominick's Amazing Adventure storybook",
  },
  {
    src: "/preview-3.png",
    alt: "Third preview page from Dominick's Amazing Adventure storybook",
  },
];

const editions = [
  {
    title: "Hero Story Edition",
    pages: "1–16 pages",
    price: "$35",
    description:
      "A personalized adventure crafted around your child's imagination, courage, and personality.",
  },
  {
    title: "Extended Hero Story Edition",
    pages: "1–24 pages",
    price: "$65",
    description:
      "A richer story experience with expanded scenes, emotional moments, and deeper adventure.",
    featured: true,
  },
  {
    title: "Legacy Keepsake Edition",
    pages: "1–24 pages",
    price: "$115",
    description:
      "A premium heirloom-quality keepsake designed to become part of family memory.",
  },
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

function PreviewCard({ src, alt, index }: { src: string; alt: string; index: number }) {
  if (!publicAssetExists(src)) {
    return (
      <div className="preview-card">
        <div className="asset-placeholder">
          <span>Preview Page {index}</span>
          <small>Place {src.replace("/", "")} in public</small>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-card">
      <Image src={src} alt={alt} width={760} height={980} className="preview-image" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Azure Island Story Books home">
          <HeaderLogo />
        </a>
        <nav className="header-nav" aria-label="Primary navigation">
          <a href="#stories">Stories</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Personalized storybooks from Okinawa</p>
          <h1>Stories Where Your Child Becomes the Hero</h1>
          <p className="hero-subtext">
            Personalized children&apos;s storybooks handcrafted in Okinawa — identity-driven adventures
            rooted in real life, family, culture, and values.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pricing">
              View Story Editions
            </a>
            <a className="button button-secondary" href="#stories">
              View Sample Story
            </a>
          </div>
        </div>
      </section>

      <section className="trust-row" aria-label="Why families choose Azure Island Story Books">
        {trustItems.map((item) => (
          <article className="trust-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section id="stories" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Sample story</p>
          <h2>Dominick&apos;s Amazing Adventure</h2>
          <p>Preview pages from a personalized hero adventure storybook.</p>
        </div>
        <div className="preview-grid">
          {previews.map((preview, index) => (
            <PreviewCard key={preview.src} {...preview} index={index + 1} />
          ))}
        </div>
      </section>

      <section id="pricing" className="content-section pricing-section">
        <div className="section-heading">
          <p className="eyebrow">Story editions</p>
          <h2>Choose Your Story Experience</h2>
        </div>
        <div className="pricing-grid">
          {editions.map((edition) => (
            <article
              className={`price-card${edition.featured ? " price-card-featured" : ""}`}
              key={edition.title}
            >
              {edition.featured ? <span className="popular-badge">Most Popular</span> : null}
              <h3>{edition.title}</h3>
              <p className="page-count">{edition.pages}</p>
              <p className="price">{edition.price}</p>
              <p className="description">{edition.description}</p>
              <a className="button button-card" href="mailto:hello@azureislandstorybooks.com">
                Reserve Your Book
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <FooterLogo />
        <p className="footer-tagline">Stories with Heart. Adventures with Purpose.</p>
        <p>Azure Island Story Books · Personalized developmental storytelling · Okinawa, Japan</p>
      </footer>
    </main>
  );
}
