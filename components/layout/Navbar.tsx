import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";

const navigation = [
  { name: "Market Brief", href: "/market-brief" },
  { name: "Learn", href: "#" },
  { name: "Journal", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Tools", href: "#" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          ATLAS
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button>Get Started</Button>
      </Container>
    </header>
  );
}