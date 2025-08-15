"use client";

import type { ChildrenProps } from "@/interfaces/component";
import { ThemeProvider } from "next-themes";

export default function AppThemeProvider({
  children,
}: ChildrenProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableColorScheme
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
