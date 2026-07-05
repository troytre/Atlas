interface ResearchCardProps {
  category: string;
  title: string;
  readTime: string;
}

export function ResearchCard({
  category,
  title,
  readTime,
}: ResearchCardProps) {
  return (
    <article className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
        {category}
      </span>

      <h3 className="mt-4 text-xl font-semibold leading-snug group-hover:text-primary">
        {title}
      </h3>

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          {readTime}
        </span>

        <span className="text-sm font-medium text-primary">
          Read →
        </span>
      </div>
    </article>
  );
}