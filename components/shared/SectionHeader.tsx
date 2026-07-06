interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold tracking-tight">
        {title}
      </h2>

      <p className="mt-3 max-w-2xl text-muted-foreground">
        {description}
      </p>
    </div>
  );
}