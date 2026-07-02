import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MenuSection } from "@/components/site/MenuSection";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CursorGlow } from "@/components/site/CursorGlow";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Full Menu — Rose Cafe Guntur" },
      {
        name: "description",
        content:
          "Browse the full Rose Cafe menu — Andhra biryanis, tandoori, continental, seafood, mocktails and desserts. Search dishes and reserve a table in Guntur.",
      },
      { property: "og:title", content: "Full Menu — Rose Cafe Guntur" },
      {
        property: "og:description",
        content:
          "Multi-cuisine menu with biryanis, tandoori, continental, seafood, mocktails and desserts at Rose Cafe, Guntur.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
});

function MenuPage() {
  // Scroll to hash on load (e.g. /menu#biryanis)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-rose-cream text-neutral-900">
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 pt-28 md:px-8 md:pt-32">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-neutral-800 transition-all hover:-translate-x-0.5 hover:text-rose-accent btn-font"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </a>
      </div>
      <MenuSection />
      <Footer />
    </div>
  );
}