import Link from "next/link";

const editions = [
  {
    slug: "hero",
    title: "Hero Story Edition",
    pages: "1-16 pages",
    price: "$35",
    description:
      "A personalized adventure crafted around your child's imagination, courage, and personality.",
  },
  {
    slug: "extended-hero",
    title: "Extended Hero Story Edition",
    pages: "1-24 pages",
    price: "$65",
    description:
      "A richer story experience with expanded scenes, emotional moments, and deeper adventure.",
    featured: true,
  },
  {
    slug: "legacy-keepsake",
    title: "Legacy Keepsake Edition",
    pages: "1-24 pages",
    price: "$115",
    description:
      "A premium heirloom-quality keepsake designed to become part of family memory.",
  },
];

export default function PricingPage() {
  return (
    <main className="site-shell">
      <section className="content-section pricing-section route-section">
        <div className="section-heading">
          <p className="eyebrow">Story editions</p>
          <h1 className="page-title">Choose Your Story Experience</h1>
        </div>
        <div className="pricing-grid">
          {editions.map((edition) => (
            <article
              className={`price-card${edition.featured ? " price-card-featured" : ""}`}
              key={edition.title}
            >
              {edition.featured ? <span className="popular-badge">Most Popular</span> : null}
              <h2>{edition.title}</h2>
              <p className="page-count">{edition.pages}</p>
              <p className="price">{edition.price}</p>
              <p className="description">{edition.description}</p>
              <Link className="button button-card" href={`/order?package=${edition.slug}`}>
                Reserve Your Book
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
