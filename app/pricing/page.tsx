import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Story Editions & Pricing — Azure Island Story Books",
  description:
    "Choose your Azure Island story experience: Hero Story, Extended Hero Story, and Legacy Keepsake editions.",
};

const editions = [
  {
    title: "Hero Story Edition",
    pages: "1\u201316 pages",
    price: "$35",
    description:
      "A personalized adventure crafted around your child's imagination, courage, and personality.",
  },
  {
    title: "Extended Hero Story Edition",
    pages: "1\u201324 pages",
    price: "$65",
    description:
      "A richer story experience with expanded scenes, emotional moments, and deeper adventure.",
    featured: true,
  },
  {
    title: "Legacy Keepsake Edition",
    pages: "1\u201324 pages",
    price: "$115",
    description:
      "A premium heirloom-quality keepsake designed to become part of family memory.",
  },
];

export default function PricingPage() {
  return (
    <main className="content-section pricing-section">
      <div className="section-heading">
        <p className="eyebrow">Story editions</p>
        <h1>Choose Your Story Experience</h1>
        <p>
          Every edition is built with the same care. Larger editions simply give
          the story more room to grow.
        </p>
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
      <div className="privacy-footnote" style={{ maxWidth: "760px", margin: "2.5rem auto 0" }}>
        <p>
          Looking for a gift for an adult \u2014 a partner, a parent, or a
          grandparent? Azure Island also creates personalized storybooks for
          grown-ups. See <Link href="/occasions">For Every Occasion</Link>.
        </p>
      </div>
    </main>
  );
}
