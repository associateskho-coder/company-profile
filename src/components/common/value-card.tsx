import type { ElementType } from "react";

export interface ValueCardProps {
  icon: ElementType;
  title: string;
  description: string;
  delay?: number;
}

export default function ValueCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ValueCardProps) {
  return (
    <article
      className="group text-center animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300">
        <Icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>
      <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </article>
  );
}
