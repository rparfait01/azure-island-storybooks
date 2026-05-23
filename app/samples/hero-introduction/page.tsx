import type { Metadata } from "next";
import Image from "next/image";
import SamplePageLayout from "../../../components/sample-page-layout";

export const metadata: Metadata = {
  title: "Hero Introduction — Sample Page",
  description:
    "A sample of the hero introduction page from an Azure Island personalized storybook.",
};

export default function HeroIntroductionSamplePage() {
  return (
    <SamplePageLayout
      eyebrow="Sample page"
      title="Hero Introduction"
      purpose="Where your child first meets their own story — and discovers they are the one it's about."
    >
      <div className="sample-spread">
        <article className="sample-text-card">
          <h2>The page where the story turns the page on them.</h2>
          <p>
            Every Azure Island story opens by introducing the hero — your child
            — with the small details that make them theirs: a favorite shirt, a
            best-loved toy, a way of standing that you would recognize from
            across a room.
          </p>
          <p>
            The art is built around a photo you send. The words are built
            around the things you tell us about your child&apos;s personality,
            their world, and the people who love them.
          </p>
          <p>
            By the end of the page, your child knows the story is about them —
            and they want to turn the page.
          </p>
        </article>

        <figure className="sample-illustration-card">
          <Image
            src="/hero-introduction.png"
            alt="Sample illustration: the hero introduction page from an Azure Island storybook"
            width={1100}
            height={1400}
            className="sample-illustration-image"
          />
        </figure>
      </div>
    </SamplePageLayout>
  );
}
