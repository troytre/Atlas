import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 py-20 text-slate-300">

      <Container>

        <div className="grid gap-14 md:grid-cols-4">

          <div>

            <h2 className="text-3xl font-black text-white">
              ATLAS
            </h2>

            <p className="mt-5 leading-8">
              Research-first platform helping retail traders
              make better decisions through transparency,
              journaling and institutional analysis.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-white">
              Platform
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link href="/">Home</Link>

              <Link href="/market-brief">
                Market Brief
              </Link>

              <Link href="/research">
                Research
              </Link>

              <Link href="/journal">
                Journal
              </Link>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-white">
              Resources
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link href="/about">
                About
              </Link>

              <Link href="/contact">
                Contact
              </Link>

              <Link href="/privacy">
                Privacy
              </Link>

              <Link href="/disclaimer">
                Disclaimer
              </Link>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-white">
              Community
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a href="#">
                Telegram
              </a>

              <a href="#">
                YouTube
              </a>

              <a href="#">
                X (Twitter)
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">

          © 2026 Atlas. All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
}