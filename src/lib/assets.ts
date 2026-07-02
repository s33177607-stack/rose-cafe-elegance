import a14 from "@/assets/cafe-14.jpg.asset.json";
import a15 from "@/assets/cafe-15.jpg.asset.json";
import a16 from "@/assets/cafe-16.jpg.asset.json";
import a17 from "@/assets/cafe-17.jpg.asset.json";
import a18 from "@/assets/cafe-18.jpg.asset.json";
import a19 from "@/assets/cafe-19.jpg.asset.json";
import a20 from "@/assets/cafe-20.jpg.asset.json";
import a21 from "@/assets/cafe-21.jpg.asset.json";
import a22 from "@/assets/cafe-22.jpg.asset.json";
import heroVid from "@/assets/hero.mp4.asset.json";

export const heroVideo = heroVid.url;

export const gallery = [
  { url: a16.url, title: "Neon Rose Arch", h: "tall" },
  { url: a15.url, title: "Feel The Vibe", h: "med" },
  { url: a21.url, title: "Heart Cabin", h: "tall" },
  { url: a19.url, title: "Be You Tiful", h: "med" },
  { url: a18.url, title: "Floral Dining Hall", h: "short" },
  { url: a22.url, title: "Neon Sound Lounge", h: "med" },
  { url: a17.url, title: "Love Wall", h: "tall" },
  { url: a20.url, title: "Golden Arch", h: "short" },
  { url: a14.url, title: "Rose Cafe Interior", h: "med" },
] as const;

export const aboutImage = a18.url;
export const heartCabin = a21.url;
export const heartCabin2 = a17.url;