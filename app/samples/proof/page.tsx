import type { Metadata } from "next";
import Image from "next/image";
import SamplePageLayout from "../../../components/sample-page-layout";

export const metadata: Metadata = {
  title: "Customer Proof Sample — Azure Island Story Books",
  description:
    "See how a real child's photo becomes their illustrated hero — the photo reference next to the finished story rendering.",
};

export default function CustomerProofSamplePage() {
  return (
    <SamplePageLayout
      eyebrow="Customer proof sample"
      title="From Photo to Hero"
      purpose="See the likeness for yourself. The photo you send becomes the hero on every page."
    >
      <div className="proof-grid">
        <figure className="proof-figure">
          <div className="proof-image-frame">
            <Image
              src="/proof-photo-reference.png"
              alt="Real photo reference of a child provided by the family"
              width={900}
              height={1100}
              className="proof-image"
            />
          </div>
          <figcaption>Real photo reference</figcaption>
        </figure>

        <figure className="proof-figure">
          <div className="proof-image-frame">
            <Image
              src="/proof-story-rendering.png"
              alt="Story rendering sample created from the customer's photo"
              width={900}
              height={1100}
              className="proof-image"
            />
          </div>
          <figcaption>Story rendering sample</figcaption>
        </figure>
      </div>
    </SamplePageLayout>
  );
}
