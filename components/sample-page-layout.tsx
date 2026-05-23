import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  purpose: string;
  children: React.ReactNode;
};

export default function SamplePageLayout({ eyebrow, title, purpose, children }: Props) {
  return (
    <main className="content-section sample-page">
      <header className="sample-page-header">
        <div className="sample-page-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="sample-page-purpose">{purpose}</p>
        </div>
        <Link href="/" className="sample-page-logo" aria-label="Azure Island Story Books home">
          <Image
            src="/book-logo.png"
            alt="Azure Island Story Books"
            width={400}
            height={400}
            className="sample-page-logo-image"
          />
        </Link>
      </header>

      <div className="sample-page-body">{children}</div>

      <div className="sample-page-back">
        <Link href="/samples" className="button button-secondary">
          ← All sample pages
        </Link>
      </div>
    </main>
  );
}
