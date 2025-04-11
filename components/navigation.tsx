"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Code2, Bell } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/resources", label: "Resources" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      )}
    >
      <nav
        className="container flex h-20 items-center mx-auto 
      "
      >
        <div className="mr-4 hidden md:flex items-center flex-1">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <span className="hidden font-bold text-lg sm:inline-block">
              DevBlog
            </span>
          </Link>
          <div className="flex gap-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "nav-link",
                  pathname === route.href && "active-nav-link text-foreground"
                )}
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        <div className="flex items-center justify-end space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              2
            </span>
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Button size="sm" className="hidden md:flex">
            Sign In
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="container md:hidden">
          <div className="flex flex-col space-y-3 pb-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <Button size="sm" className="mt-2">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
