interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 bg-gradient-navy overflow-hidden">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,hsl(var(--gold)/0.4),transparent_40%),radial-gradient(circle_at_80%_60%,hsl(var(--gold)/0.2),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl animate-fade-up">
          <div className="text-xs tracking-[0.25em] uppercase text-gold font-semibold mb-4">
            {eyebrow}
          </div>
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-white/75 text-lg mt-6 max-w-2xl leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
