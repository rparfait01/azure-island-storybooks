import type { Metadata } from "next";
import Image from "next/image";
import SamplePageLayout from "../../../components/sample-page-layout";

export const metadata: Metadata = {
  title: "Hero Moment of Realization — Sample Page",
  description:
    "A sample of the moment-of-realization page from an Azure Island personalized storybook.",
};

export default function HeroRealizationSamplePage() {
  return (
    <SamplePageLayout
      eyebrow="Sample page"
      title="Hero Moment of Realization"
      purpose="The turning point — when your child recognizes their own courage and answers the call."
    >
      <div className="sample-spread">
        <article className="sample-text-card">
          <h2>The page where they decide who they are.</h2>
          <p>
            Every Azure Island story has a moment — a single page — where the
            hero understands something about themselves that wasn&apos;t true
            on the page before.
          </p>
          <p>
            This is the page we craft most carefully. The illustration leans
            in. The words slow down. Your child sees themselves making a
            choice — kindness, courage, honesty, persistence — and the story
            confirms that this is who they are.
          </p>
          <p>
            Parents tell us this is the page their children return to. It is
            the page that does the developmental work.
          </p>
        </article>

        <figure className="sample-illustration-card">
          <Image
            src="/hero-realization.png"
            alt="Sample illustration: the hero's moment-of-realization page from an Azure Island storybook"
            width={1100}
            height={1400}
            className="sample-illustration-image"
          />
        </figure>
      </div>
    </SamplePageLayout>
  );
}
