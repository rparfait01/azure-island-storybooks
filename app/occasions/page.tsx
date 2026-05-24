import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Every Occasion — Azure Island Story Books",
  description:
    "Personalized storybooks for the whole family — mothers, fathers, grandparents, and partners. Real people, brought into a story made for them.",
};

const adultEditions = [
  {
    title: "For Mom",
    copy: "A storybook that makes the mother in your life the hero of her own pages — her warmth, her strength, the person her family already knows her to be.",
  },
  {
    title: "For Dad",
    copy: "A story that honors the father in your life — told plainly or told with a grin, however he is best remembered and loved.",
  },
  {
    title: "For a Partner or Spouse",
    copy: "An appreciation storybook for the person you share your life with — your story, the two of you, made into something they can hold.",
  },
  {
    title: "The Grandparent Keepsake",
    copy: "A book built around a grandparent and the families they have watched grow — children, their children's families, and the grandchildren who came after.",
  },
];

const tones = [
  { name: "Serious", note: "Heartfelt and sincere, start to finish." },
  { name: "Light Humor", note: "Warm and gently funny — a smile on every page." },
  { name: "Dad Humor", note: "Affectionate groan-worthy jokes, the way he tells them." },
  { name: "Sarcastic", note: "Playful and quick-witted — a gift with a wink." },
  { name: "Coarse / Unfiltered", note: "For a grown-up gift that doesn't hold back. Adult editions only." },
];

export default function OccasionsPage() {
  return (
    <main className="content-section">
      <div className="section-heading">
        <p className="eyebrow">For every occasion</p>
        <h1>Stories for the Whole Family</h1>
        <p>
          Azure Island began with a simple idea: a child should be able to see
          themselves as the hero of their own story. Recognizing a child &mdash;
          their name, their courage, who they are becoming &mdash; is still the
          root of everything we make. But that same care doesn&apos;t have to
          stop at childhood. The people we love most are worth a story too.
        </p>
      </div>

      <div className="privacy-grid">
        {adultEditions.map((edition) => (
          <article className="privacy-card" key={edition.title}>
            <h2>{edition.title}</h2>
            <p>{edition.copy}</p>
          </article>
        ))}
      </div>

      <div className="section-heading" style={{ marginTop: "3.5rem" }}>
        <p className="eyebrow">How the stories are made</p>
        <h2>Real People, Brought Into the Story</h2>
        <p>
          Every Azure Island storybook is illustrated with the likeness of real
          people, so the family in the pages is recognizably your family. A
          rendering captures who a person is &mdash; it is not a redrawn copy of
          one photograph. The story decides the scene; the photos simply tell us
          who belongs in it. Some illustrations may follow a real moment closely,
          and many will not &mdash; they go wherever the story needs them to go.
        </p>
      </div>

      <div className="privacy-grid">
        <article className="privacy-card">
          <h2>You shape it. We author it.</h2>
          <p>
            You provide the people, the values you want honored, the tone, and
            the moments or scenarios that matter. From there, the story is
            written by Azure Island. You give us the heart of it &mdash; shaping
            that into a story that reads well is our craft.
          </p>
        </article>
        <article className="privacy-card">
          <h2>Custom storytelling tier</h2>
          <p>
            For adult editions, some families want a specific true memory or a
            major life event told faithfully &mdash; a real story you lived
            together. Telling a real story well takes more care, so this is
            offered as a custom tier at additional cost. Available for adult
            editions only.
          </p>
        </article>
      </div>

      <div className="section-heading" style={{ marginTop: "3.5rem" }}>
        <p className="eyebrow">Adult editions</p>
        <h2>Told in the Voice That Fits the Person</h2>
        <p>
          Children&apos;s editions are always warm and age-appropriate. Adult
          editions can be told in whatever voice suits the person being
          celebrated &mdash; choose the tone when you order.
        </p>
      </div>

      <div className="privacy-grid">
        {tones.map((tone) => (
          <article className="privacy-card" key={tone.name}>
            <h2>{tone.name}</h2>
            <p>{tone.note}</p>
          </article>
        ))}
      </div>

      <div className="section-heading" style={{ marginTop: "3.5rem" }}>
        <p className="eyebrow">The elusive family photo</p>
        <h2>The Whole Family, Together at Last</h2>
        <p>
          Some families have never managed a single photograph with everyone in
          it. People move, time passes, and the one picture with all of you
          never quite happens. For those families, Azure Island creates a
          composite family rendering &mdash; a single illustrated portrait, drawn
          from whatever separate photos exist, that brings the whole family
          together in one image.
        </p>
        <p>
          It is an artwork, not an altered photograph. It can place loved ones
          side by side who were never photographed together &mdash; so that the
          family portrait you never got to take can finally exist.
        </p>
      </div>

      <div className="privacy-grid">
        <article className="privacy-card">
          <h2>Memory Lane</h2>
          <p>
            Many of our family and grandparent books close with a section we
            call Memory Lane &mdash; the actual photographs the renderings drew
            from, printed at the back as the story has moved through each
            family. The photos don&apos;t need to be perfect. They only need to
            be present. This section is optional and included where it adds
            something to the book.
          </p>
        </article>
        <article className="privacy-card">
          <h2>Whatever the story needs to be</h2>
          <p>
            A storybook can be built around almost any person or occasion. If
            you have someone in mind and aren&apos;t sure how a story would
            work, tell us &mdash; that conversation is where most of our family
            books begin.
          </p>
        </article>
      </div>

      <div className="privacy-footnote" style={{ maxWidth: "760px", margin: "3rem auto 0" }}>
        <p>
          Ready to begin, or have a question about a family story? Start an{" "}
          <Link href="/order">order</Link> or email us at{" "}
          <a href="mailto:summitpublications@summitstrategiesgroup.org">
            summitpublications@summitstrategiesgroup.org
          </a>
          .
        </p>
      </div>
    </main>
  );
}
