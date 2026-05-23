import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

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
    <main>
      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Personalized storybooks from Okinawa</p>
          <h1>Stories Where Your Child Becomes the Hero</h1>
          <p className="hero-subtext">
            Personalized children&apos;s storybooks handcrafted in Okinawa — identity-driven adventures
            rooted in real life, family, culture, and values.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#pricing">
              View Story Editions
            </Link>
            <Link className="button button-secondary" href="#stories">
              View Sample Story
            </Link>
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
            <div className="price-card-wrapper" key={edition.title}>
              <div className="price-card-badge-row">
                <span
                  className={`popular-badge${edition.featured ? "" : " popular-badge-spacer"}`}
                  aria-hidden={!edition.featured}
                >
                  Most Popular
                </span>
              </div>
              <article
                className={`price-card${edition.featured ? " price-card-featured" : ""}`}
              >
                <h3>{edition.title}</h3>
                <p className="page-count">{edition.pages}</p>
                <p className="price">{edition.price}</p>
                <p className="description">{edition.description}</p>
                <Link className="button button-card" href="/order">
                  Reserve Your Book
                </Link>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
