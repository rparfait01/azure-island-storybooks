import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sample Story \u2014 Azure Island Story Books",
  description:
    "Preview pages from a personalized Azure Island hero adventure storybook.",
};

const previews = [
  { src: "/preview-1.png", alt: "Preview page from Dominick\u2019s Amazing Adventure storybook" },
  { src: "/preview-2.png", alt: "Second preview page from Dominick\u2019s Amazing Adventure storybook" },
  { src: "/preview-3.png", alt: "Third preview page from Dominick\u2019s Amazing Adventure storybook" },
];

function publicAssetExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src.replace(/^\//, "")));
}

function PreviewCard({ src, alt, index }: { src: string; alt: string; index: number }) {
  if (!publicAssetExists(src)) {
    return (
      <div className="preview-card">
        <div className="asset-placeholder">
          <span>Preview Page {index}</span>
          <small>Place {src.replace("/", "")} in public</small>
        </div>
      </div>
    );
  }
  return (
    <div className="preview-card">
      <Image src={src} alt={alt} width={760} height={980} className="preview-image" />
    </div>
  );
}

export default function StoriesPage() {
  return (
    <main className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Sample story</p>
        <h1>Dominick\u2019s Amazing Adventure</h1>
        <p>Preview pages from a personalized hero adventure storybook.</p>
      </div>
      <div className="preview-grid">
        {previews.map((preview, index) => (
          <PreviewCard key={preview.src} {...preview} index={index + 1} />
        ))}
      </div>
      <div className="section-heading" style={{ marginTop: "2.5rem" }}>
        <Link className="button button-primary" href="/pricing">View Story Editions</Link>
      </div>
    </main>
  );
}
