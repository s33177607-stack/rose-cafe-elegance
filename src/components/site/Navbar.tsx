import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/menu", label: "Menu" },
  { href: "/#private", label: "Private Dining" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="/"
          className={`flex items-center gap-2 transition-all ${
            scrolled ? "scale-90" : ""
          }`}
        >
          <span
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rose text-white shadow-glow"
            aria-hidden
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 2c3 4 6 6 6 10a6 6 0 1 1-12 0c0-4 3-6 6-10z" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight" style={{color: scrolled ? "#111" : "#fff"}}>
              Rose Cafe
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em]" style={{color: scrolled ? "#E91E63" : "#F8D6E7"}}>
              Guntur
            </span>
          </span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-2 transition-all lg:flex ${
            scrolled ? "glass" : "bg-white/10 backdrop-blur-md border border-white/20"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm transition-all hover:bg-white/60 ${
                scrolled ? "text-neutral-800" : "text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-rose px-5 py-2.5 text-sm text-white shadow-glow transition-all hover:scale-105 btn-font lg:inline-flex"
        >
          Reserve Table
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-full glass lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mx-5 mt-3 rounded-3xl glass p-4 lg:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-neutral-800 hover:bg-white/60"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-2xl bg-gradient-rose px-4 py-3 text-center text-white btn-font"
              >
                Reserve Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}