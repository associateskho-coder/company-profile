import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import type { ElementType } from "react";

export interface ExpertiseCardProps {
  icon: ElementType;
  title: string;
  description: string;
  delay?: number;
}

export default function ExpertiseCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ExpertiseCardProps) {
  return (
    <Card
      as="article"
      className="hover-lift border-0 shadow-lg bg-card/80 backdrop-blur-sm animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-accent" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-primary">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
