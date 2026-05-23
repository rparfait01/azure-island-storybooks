import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Pages — Azure Island Story Books",
  description:
    "See how Azure Island personalizes a child's likeness, builds their hero introduction, and brings the moment of realization to life.",
};

const samples = [
  {
    href: "/samples/proof",
    title: "Customer Proof Sample",
    blurb: "See how a real child's photo becomes their illustrated hero — side by side.",
    image: "/proof-story-rendering.png",
    imageAlt: "Story rendering sample alongside the original photo reference",
  },
  {
    href: "/samples/hero-introduction",
    title: "Hero Introduction",
    blurb: "The opening page that introduces your child as the hero of their own adventure.",
    image: "/hero-introduction.png",
    imageAlt: "Sample illustration of a hero introduction page",
  },
  {
    href: "/samples/hero-realization",
    title: "Hero Moment of Realization",
    blurb: "The turning point — your child recognizes their own courage and answers the call.",
    image: "/hero-realization.png",
    imageAlt: "Sample illustration of the hero's moment of realization",
  },
];

export default function SamplesIndexPage() {
  return (
    <main className="content-section samples-index">
      <div className="section-heading">
        <p className="eyebrow">Sample pages</p>
        <h1>Inside an Azure Island Storybook</h1>
        <p>
          A few sample pages from the kinds of personalized stories we make.
          Click any sample to see it full-sized.
        </p>
      </div>

      <div className="samples-grid">
        {samples.map((sample) => (
          <Link key={sample.href} href={sample.href} className="sample-card">
            <div className="sample-card-image">
              <Image
                src={sample.image}
                alt={sample.imageAlt}
                width={760}
                height={760}
                className="sample-card-image-inner"
              />
            </div>
            <div className="sample-card-body">
              <h2>{sample.title}</h2>
              <p>{sample.blurb}</p>
              <span className="sample-card-cta">View sample →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
