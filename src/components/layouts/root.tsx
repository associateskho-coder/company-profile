import type { ChildrenProps } from "@/interfaces/component";
import { cn } from "@/lib/utils";
import Loader from "nextjs-toploader";
import AppThemeProvider from "../providers/theme";
import "@/styles/globals.css";
import Schema from "../scripts/schema";

export default function RootLayout({
  children,
}: ChildrenProps) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <Schema />
      </head>
      <body
        suppressHydrationWarning
        suppressContentEditableWarning
        className={cn(
          "text-neutral-900 dark:text-neutral-300 antialiased",
          "scroll-smooth min-h-svh",
          "bg-background"
        )}
      >
        <Loader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          showSpinner
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
