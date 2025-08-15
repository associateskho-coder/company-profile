"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { X, Menu } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/constants/navigation";
import ThemeToggle from "../common/theme-toggle";

function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="app-header"
      data-scroll={isScrolled}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <div className="font-serif font-bold text-xl lg:text-2xl text-primary">
              KHO & ASSOSITE
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "hover-gold font-medium transition-all duration-300",
                  !isScrolled
                    ? "dark:text-foreground text-white"
                    : "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block lg:space-x-4">
            <ThemeToggle />
            <Button variant="default" size="lg" asChild>
              <Link href="#contact">Kontak Kami</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-3">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent px-4 py-2 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2 space-y-4">
                <ThemeToggle />
                <Button
                  variant="default"
                  className="w-full"
                  asChild
                >
                  <Link href="#contact">Kontak Kami</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default memo(AppHeader);
