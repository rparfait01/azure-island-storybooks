import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Payment Protection — Azure Island Story Books",
  description:
    "How Azure Island Story Books protects your family's information: no personal data retained after delivery, password-protected PDF + physical book on every order.",
};

export default function PrivacyPage() {
  return (
    <main className="content-section privacy-section">
      <div className="section-heading">
        <p className="eyebrow">Our promise to families</p>
        <h1>Privacy &amp; Payment Protection</h1>
        <p>
          Personalized stories require trust. Here is exactly how we handle the
          information you share with us — in plain language, no fine print.
        </p>
      </div>

      <div className="privacy-grid">
        <article className="privacy-card">
          <h2>Your information is not kept after delivery</h2>
          <p>
            The details you submit when you order — your name, email, your
            child&apos;s name and story details — are used only to create and
            deliver your book. Once your book is in your hands, those details
            are removed from our systems.
          </p>
        </article>

        <article className="privacy-card">
          <h2>Invoices are the one exception</h2>
          <p>
            We retain your invoice solely for legal and tax record-keeping.
            Invoices are never used for marketing and are never shared with
            third parties.
          </p>
        </article>

        <article className="privacy-card">
          <h2>What you receive with every order</h2>
          <ul>
            <li>
              A <strong>password-protected PDF</strong> of your child&apos;s
              storybook, so the digital copy stays in your family.
            </li>
            <li>
              A <strong>physical printed copy</strong> of the book, delivered
              locally in Okinawa or shipped on request.
            </li>
          </ul>
        </article>

        <article className="privacy-card">
          <h2>Payment is handled through PayPal</h2>
          <p>
            All payments are processed by PayPal. We never see or store your
            card details — only PayPal does. Scan the QR on the order page from
            your phone&apos;s camera to pay securely.
          </p>
        </article>
      </div>

      <div className="privacy-footnote">
        <p>
          Questions about how your information is handled? Reach out at{" "}
          <a href="mailto:hello@azureislandstorybooks.com">
            hello@azureislandstorybooks.com
          </a>
          {" "}— we&apos;ll answer in plain language.
        </p>
      </div>
    </main>
  );
}
