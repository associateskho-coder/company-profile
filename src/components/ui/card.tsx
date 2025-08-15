import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  as: Tag = "div",
  ...props
}: ComponentProps<"div"> & {
  as?: "div" | "section" | "article" | "main";
}) {
  return (
    <Tag
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-1.5 px-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  as: Tag = "div",
  ...props
}: ComponentProps<
  "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> & {
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  return (
    <Tag
      data-slot="card-title"
      className={cn(
        "leading-none font-semibold",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  as: Tag = "div",
  ...props
}: ComponentProps<"div" | "p"> & { as?: "div" | "p" }) {
  return (
    <Tag
      data-slot="card-description"
      className={cn(
        "text-muted-foreground text-sm",
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
