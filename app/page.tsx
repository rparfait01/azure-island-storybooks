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

const explore = [
  {
    href: "/stories",
    eyebrow: "Sample story",
    title: "See a Story",
    copy: "Preview pages from a personalized hero adventure storybook.",
  },
  {
    href: "/pricing",
    eyebrow: "Story editions",
    title: "Choose an Edition",
    copy: "Three editions of personalized children's storybooks, built with the same care.",
  },
  {
    href: "/occasions",
    eyebrow: "For every occasion",
    title: "Gifts for the Whole Family",
    copy: "Personalized storybooks for parents, grandparents, and partners \u2014 not just children.",
  },
];

export default function Home() {
  return (
    <main>
      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Personalized storybooks from Okinawa</p>
          <h1>Stories Where Your Child Becomes the Hero</h1>
          <p className="hero-subtext">
            Personalized children&apos;s storybooks handcrafted in Okinawa &mdash; identity-driven adventures
            rooted in real life, family, culture, and values.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/pricing">
              View Story Editions
            </Link>
            <Link className="button button-secondary" href="/stories">
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

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Explore</p>
          <h2>Where Would You Like to Begin?</h2>
        </div>
        <div className="samples-grid">
          {explore.map((card) => (
            <Link key={card.href} href={card.href} className="sample-card">
              <div className="sample-card-body">
                <p className="eyebrow">{card.eyebrow}</p>
                <h2>{card.title}</h2>
                <p>{card.copy}</p>
                <span className="sample-card-cta">Open &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
