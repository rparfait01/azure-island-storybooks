import Image from "next/image";
import Link from "next/link";

const sampleCards = [
  {
    title: "Customer Proof Sample",
    caption: "From real life to storybook magic.",
    purpose: "See how a parent-provided photo becomes personalized, story-safe artwork.",
    src: "/images/samples/customer-proof-sample.png",
    alt: "Customer proof sample showing a real photo reference beside a magical storybook rendering",
  },
  {
    title: "Hero Introduction",
    caption: "Every story begins by showing who the child is.",
    purpose: "Introduce the child as the hero and connect identity to value.",
    src: "/images/samples/hero-introduction.png",
    alt: "Storybook page showing Dominick learning with Princess Hinako",
  },
  {
    title: "Hero Moment of Realization",
    caption: "The child remembers who they are and chooses courage.",
    purpose: "Show emotional growth, courage, and story meaning.",
    src: "/images/samples/hero-realization.png",
    alt: "Storybook page showing Dominick holding a sword by the ocean",
  },
];

export default function StoriesPage() {
  return (
    <main className="site-shell">
      <section className="content-section route-section proof-section">
        <div className="section-heading">
          <p className="eyebrow">Customer proof sample</p>
          <h1 className="page-title">
            <span>See Your Child</span>
            <span>Become the Hero</span>
          </h1>
          <p>
            Parents provide a real photo. We transform it into a story-safe, magical illustration
            that keeps the child recognizable while making them the hero of their own adventure.
          </p>
        </div>

        <div className="proof-grid">
          {sampleCards.map((sample) => (
            <article className="proof-card" key={sample.title}>
              <div className="proof-image-wrap">
                <Image
                  src={sample.src}
                  alt={sample.alt}
                  width={1584}
                  height={1224}
                  className="proof-image"
                  sizes="(max-width: 760px) 100vw, 50vw"
                />
              </div>
              <div className="proof-copy">
                <h2>{sample.title}</h2>
                <p className="proof-caption">{sample.caption}</p>
                <p>{sample.purpose}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="proof-trust-line">
          Your child&apos;s real photo is used only as visual direction for their personalized
          storybook artwork.
        </p>

        <section className="payment-proof-card" aria-label="PayPal payment option">
          <div>
            <p className="eyebrow">Payment option</p>
            <h2>PayPal QR Available</h2>
            <p>
              Families can scan the PayPal QR code when they are ready to reserve and finalize
              their personalized storybook order.
            </p>
          </div>
          <Image
            src="/images/payments/paypal-royce-qr.jpg"
            alt="PayPal QR code for Azure Island Story Books payment"
            width={1170}
            height={2532}
            className="paypal-qr"
            sizes="(max-width: 760px) 70vw, 220px"
          />
        </section>

        <div className="proof-actions">
          <Link className="button button-primary" href="/order">
            Start Your Child&apos;s Adventure
          </Link>
        </div>
      </section>
    </main>
  );
}
