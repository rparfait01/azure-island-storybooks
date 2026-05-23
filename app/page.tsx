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

export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Personalized storybooks from Okinawa</p>
          <h1>Stories Where Your Child Becomes the Hero</h1>
          <p className="hero-subtext">
            Personalized children&apos;s storybooks handcrafted in Okinawa - identity-driven adventures
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
    </main>
  );
}
