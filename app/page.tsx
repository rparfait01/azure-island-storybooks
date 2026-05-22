export default function Home() {
  const editions = [
    {
      title: "Hero Story Edition",
      pages: "1–16 Pages",
      price: "$35",
      description:
        "A personalized short-form adventure designed around your child’s imagination, courage, and personality.",
    },
    {
      title: "Extended Hero Story Edition",
      pages: "1–24 Pages",
      price: "$65",
      description:
        "A longer adventure with expanded scenes, emotional depth, and richer storytelling moments.",
    },
    {
      title: "Legacy Keepsake Edition",
      pages: "1–24 Pages",
      price: "$115",
      description:
        "A premium keepsake experience with elevated presentation designed to become part of family memory.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3eb] text-black">
      {/* HERO */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-black/10 bg-white p-8 shadow-sm md:p-14">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-black text-2xl font-black">
              AI
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-black/50">
              Azure Island Story Books
            </p>

            <h1 className="mx-auto max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Personalized Hero Storybooks Made Just For Your Child
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/70">
              Every child deserves to feel like the hero of their own story.
              Custom-crafted adventures created with care in Okinawa.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:scale-[1.02]"
              >
                View Editions
              </a>

              <a
                href="#example"
                className="rounded-full border border-black px-8 py-4 font-bold transition hover:bg-black hover:text-white"
              >
                View Example Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <div className="rounded-[28px] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black">3-Day Lead Time</h3>
            <p className="mt-3 leading-7 text-black/70">
              Carefully managed production volume so every story receives proper
              attention and quality.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black">Free Local Delivery</h3>
            <p className="mt-3 leading-7 text-black/70">
              Onna • Ginowan • Uruma • Camp Foster • Kadena Air Base • Camp
              Shields • Camp Lester
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black">Every Edition Matters</h3>
            <p className="mt-3 leading-7 text-black/70">
              No “cheap” version. Every book is crafted with care and lasting
              value.
            </p>
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section id="example" className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-black/50">
              Example Story
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Dominick’s Amazing Adventure
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/70">
              Showcase page previews, cover art, and story moments here.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative aspect-[4/5] rounded-[28px] border border-black/10 bg-white p-5 shadow-sm"
              >
                <div className="absolute left-1/2 top-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-black bg-white text-[10px] font-black">
                  AI
                </div>

                <div className="flex h-full items-center justify-center rounded-[22px] border border-dashed border-black/20 bg-[#f7f3eb] text-center text-black/40">
                  Replace With Example Image
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-black/50">
              Editions
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Choose Your Story Experience
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {editions.map((edition) => (
              <div
                key={edition.title}
                className="rounded-[32px] bg-white p-8 shadow-sm"
              >
                <h3 className="text-3xl font-black">{edition.title}</h3>

                <p className="mt-2 font-bold text-black/50">
                  {edition.pages}
                </p>

                <div className="mt-6 text-5xl font-black">
                  {edition.price}
                </div>

                <p className="mt-6 leading-8 text-black/70">
                  {edition.description}
                </p>

                <button className="mt-8 w-full rounded-full bg-black px-6 py-4 font-bold text-white transition hover:scale-[1.02]">
                  Reserve Your Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR */}
      <section className="px-6 py-14">
        <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-black text-2xl font-black">
            AI
          </div>

          <h2 className="mt-6 text-4xl font-black">
            Scan To Visit The Site
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-black/70">
            Add your black-and-white QR code here with the centered logo mark.
          </p>

          <div className="mx-auto mt-10 flex h-72 w-72 items-center justify-center rounded-[32px] border border-dashed border-black/20 bg-[#f7f3eb] text-black/40">
            QR CODE HERE
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-14 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-black text-lg font-black">
          AI
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-black/50">
          Azure Island Story Books
        </p>
      </footer>
    </main>
  );
}