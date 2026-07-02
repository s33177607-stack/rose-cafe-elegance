import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, Phone } from "lucide-react";
import { menuCategories } from "@/lib/menu-data";

export function MenuSection() {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(menuCategories[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return menuCategories;
    return menuCategories
      .map((c) => ({ ...c, items: c.items.filter((i) => i.name.toLowerCase().includes(t)) }))
      .filter((c) => c.items.length > 0);
  }, [q]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 },
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="menu" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-rose-blush/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-rose-pink/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-rose-accent">
            The Menu
          </div>
          <h2 className="text-5xl font-semibold md:text-7xl">
            <span className="text-gradient-rose">Curated</span> for every craving
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
            Multi-cuisine plates crafted with love — from smoky Andhra classics to Continental
            comfort, biryanis, mocktails and dessert.
          </p>
        </motion.div>

        {/* Sticky category nav */}
        <div className="sticky top-20 z-30 mx-auto mt-10 max-w-5xl">
          <div className="glass flex flex-col gap-3 rounded-3xl p-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search dishes…"
                className="w-full rounded-2xl bg-white/60 py-3 pl-11 pr-4 text-sm outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-rose-accent/50"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto md:max-w-[60%]">
              {filtered.map((c) => (
                <button
                  key={c.id}
                  onClick={() => scrollTo(c.id)}
                  className={`whitespace-nowrap rounded-2xl px-4 py-2.5 text-sm transition-all btn-font ${
                    active === c.id
                      ? "bg-gradient-rose text-white shadow-glow"
                      : "bg-white/50 text-neutral-700 hover:bg-white/80"
                  }`}
                >
                  <span className="mr-1.5">{c.icon}</span>
                  {c.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 space-y-16">
          {filtered.map((cat, idx) => (
            <div
              key={cat.id}
              id={cat.id}
              ref={(el) => { sectionRefs.current[cat.id] = el; }}
              className="scroll-mt-40"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-8 flex items-end justify-between gap-6"
              >
                <div>
                  <div className="text-4xl">{cat.icon}</div>
                  <h3 className="mt-2 text-3xl font-semibold md:text-5xl">{cat.title}</h3>
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-rose-pink/60 to-transparent" />
                <div className="hidden text-xs uppercase tracking-[0.3em] text-neutral-500 md:block">
                  {cat.items.length} dishes
                </div>
              </motion.div>

              <div className="grid gap-4 md:grid-cols-2">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name + i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                    className="group flex items-center justify-between gap-6 rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:shadow-glow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-rose text-white text-lg opacity-90 transition-transform group-hover:scale-110">
                        {cat.icon}
                      </div>
                      <div className="font-medium text-neutral-800">{item.name}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mx-3 h-px w-6 bg-neutral-300/70 group-hover:w-10 transition-all" />
                      <div className="font-display text-xl font-semibold text-rose-accent">
                        ₹{item.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Order/Reserve floating */}
        <a
          href="#contact"
          className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-gradient-rose px-6 py-3.5 text-sm text-white shadow-glow transition-all hover:scale-105 btn-font md:inline-flex"
        >
          Reserve Table
        </a>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 overflow-hidden rounded-[2.5rem] glass p-10 text-center md:p-16"
        >
          <h3 className="text-4xl font-semibold md:text-6xl">
            Craving <span className="text-gradient-rose">something delicious?</span>
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            Reserve your table or call us — we'll set the roses just for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-gradient-rose px-6 py-3 text-white shadow-glow transition-all hover:scale-105 btn-font"
            >
              Reserve Your Table
            </a>
            <a
              href="tel:+919666863864"
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3 text-neutral-800 ring-1 ring-white/70 backdrop-blur-md transition-all hover:bg-white btn-font"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
          <div className="mt-5 text-sm text-neutral-600">📞 +91 96668 63864</div>
        </motion.div>
      </div>
    </section>
  );
}