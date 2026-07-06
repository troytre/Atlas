import Link from "next/link";
import { Container } from "@/components/layout/Container";

const research = [
  {
    title: "NIFTY Weekly Outlook",
    description: "A broader technical outlook for the coming week.",
    readTime: "6 min",
    href: "/research",
  },
  {
    title: "Bank NIFTY Momentum",
    description: "Institutional positioning and momentum analysis.",
    readTime: "4 min",
    href: "/research",
  },
  {
    title: "Gold Technical Analysis",
    description: "Support, resistance and trend structure.",
    readTime: "5 min",
    href: "/research",
  },
];

export function RelatedResearch() {
  return (
    <section className="py-14">
      <Container>

        <div className="mb-10">

          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Continue Learning
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Related Research
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Go deeper into today's market with detailed research articles.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {research.map((article) => (

            <Link
              key={article.title}
              href={article.href}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <span className="text-4xl">📄</span>

              <h3 className="mt-5 text-xl font-bold group-hover:text-blue-600">
                {article.title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {article.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm">
                  {article.readTime}
                </span>

                <span className="font-semibold text-blue-600">
                  Read →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </Container>
    </section>
  );
}






/*

import Link from "next/link";
import { Container } from "@/components/layout/Container";

const articles = [
  {
    title: "NIFTY Weekly Outlook",
    href: "/research",
  },
  {
    title: "Gold Technical Analysis",
    href: "/research",
  },
  {
    title: "Bitcoin Momentum Study",
    href: "/research",
  },
];

export function RelatedResearch() {
  return (
    <section className="py-12">
      <Container>

        <div className="rounded-3xl border bg-card p-8">

          <h2 className="text-3xl font-bold">
            Continue Your Research
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            {articles.map((article) => (

              <Link
                key={article.title}
                href={article.href}
                className="rounded-xl border p-6 transition hover:border-primary hover:shadow-lg"
              >
                <h3 className="font-semibold">
                  {article.title}
                </h3>

                <p className="mt-6 text-sm text-primary">
                  Read Article →
                </p>

              </Link>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

*/