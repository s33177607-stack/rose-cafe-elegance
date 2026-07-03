import { Heart, Phone, MapPin, Clock, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-rose-ink pt-20 pb-10 text-white/80">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-accent/30 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rose text-white shadow-glow">
              <Heart className="h-4 w-4" />
            </span>
            <div>
              <div className="font-display text-xl font-bold text-white">Rose Cafe</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-rose-blush">Guntur</div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm text-white/60">
            Where every meal becomes a beautiful memory. Multi-cuisine restaurant in Guntur, Andhra Pradesh.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">Quick Links</div>
          <ul className="space-y-2 text-sm">
            {[
              ["About", "/#about"],
              ["Gallery", "/#gallery"],
              ["Menu", "/menu"],
              ["Private Dining", "/#private"],
              ["Reviews", "/#reviews"],
              ["Contact", "/#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="transition-colors hover:text-rose-blush">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">Contact</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              <a href="tel:+919666863864" className="transition-colors hover:text-rose-blush">
                +91 96668 63864
              </a>
            </li>
            <li className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" /> Guntur, Andhra Pradesh</li>
            <li className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> 11 AM – 11 PM Daily</li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">Follow</div>
          <a
            href="https://www.instagram.com/rosecafe_guntur/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md transition-all hover:bg-white/20"
          >
            <Instagram className="h-4 w-4" /> @rosecafe_guntur
          </a>
        </div>
      </div>
      <div className="relative mx-auto mt-14 max-w-7xl border-t border-white/10 px-5 pt-6 text-center text-xs text-white/50 md:px-8">
        © {new Date().getFullYear()} Rose Cafe · Guntur. All rights reserved.
      </div>
    </footer>
  );
}
