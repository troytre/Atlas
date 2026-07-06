import { Container } from "@/components/layout/Container";

const posts = [
  {
    category: "Market",
    title: "Understanding Open Interest Build-up",
    description:
      "Learn how OI expansion helps identify institutional participation before major market moves.",
    readTime: "8 min",
  },
  {
    category: "Education",
    title: "How Institutions Use VWAP",
    description:
      "Understand why VWAP is one of the most important reference levels for smart money.",
    readTime: "7 min",
  },
  {
    category: "Macro",
    title: "How CPI Data Moves Markets",
    description:
      "Discover how inflation reports impact equity indices, bonds and trader sentiment.",
    readTime: "9 min",
  },
  {
    category: "Market",
    title: "Liquidity Sweep Explained",
    description:
      "Why markets take out highs and lows before trending, and how professionals read it.",
    readTime: "6 min",
  },
  {
    category: "Education",
    title: "Breakout vs Fakeout",
    description:
      "Avoid common breakout traps by understanding liquidity and confirmation.",
    readTime: "5 min",
  },
  {
    category: "Macro",
    title: "Sector Rotation Guide",
    description:
      "Follow institutional money as it rotates across sectors during different market cycles.",
    readTime: "8 min",
  },
];

export function ResearchGrid() {
  return (
    <section className="py-16">
      <Container>

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Latest Research
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Professional Market Research
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {posts.map((post) => (

            <article
              key={post.title}
              className="group overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Thumbnail */}

              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-6xl">
                📊
              </div>

              {/* Content */}

              <div className="p-7">

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {post.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold transition group-hover:text-blue-600">
                  {post.title}
                </h3>

                <p className="mt-4 text-muted-foreground">
                  {post.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>

                  <button className="font-semibold text-blue-600 transition group-hover:translate-x-1">
                    Read →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </Container>
    </section>
  );
}