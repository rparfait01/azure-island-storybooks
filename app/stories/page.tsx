import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const previews = [
  {
    src: "/preview-1.png",
    alt: "Preview page from Dominick's Amazing Adventure storybook",
  },
  {
    src: "/preview-2.png",
    alt: "Second preview page from Dominick's Amazing Adventure storybook",
  },
  {
    src: "/preview-3.png",
    alt: "Third preview page from Dominick's Amazing Adventure storybook",
  },
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
    <main className="site-shell">
      <section className="content-section route-section">
        <div className="section-heading">
          <p className="eyebrow">Sample story</p>
          <h1 className="page-title">Dominick&apos;s Amazing Adventure</h1>
          <p>Preview pages from a personalized hero adventure storybook.</p>
        </div>
        <div className="preview-grid">
          {previews.map((preview, index) => (
            <PreviewCard key={preview.src} {...preview} index={index + 1} />
          ))}
        </div>
      </section>
    </main>
  );
}
