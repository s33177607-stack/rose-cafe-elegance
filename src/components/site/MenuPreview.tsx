import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { menuCategories } from "@/lib/menu-data";

const featuredIds = ["nv-biryani", "veg-biryani", "nv-tandoori", "seafood", "continental", "mocktails"];
const featuredCategories = menuCategories.filter((c) => featuredIds.includes(c.id));

export function MenuPreview() {
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
            A taste of what awaits — explore each category or dive into the full menu below.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-rose opacity-30 blur-2xl transition-opacity group-hover:opacity-70" />
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-rose text-2xl text-white shadow-glow">
                  {cat.icon}
                </div>
                <h3 className="font-display text-2xl font-semibold">{cat.title}</h3>
              </div>
              <ul className="mt-2 space-y-3">
                {cat.items.slice(0, 4).map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 text-sm"
                  >
                    <span className="text-neutral-700">{item.name}</span>
                    <span className="font-display font-semibold text-rose-accent">
                      ₹{item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={`/menu#${cat.id}`}
                className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-rose-accent transition-all hover:gap-2.5 btn-font"
              >
                See More in {cat.title}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="/menu"
            className="rounded-full bg-gradient-rose px-8 py-4 text-sm text-white shadow-glow transition-all hover:scale-105 btn-font"
          >
            View Full Menu &amp; Search
          </a>
        </motion.div>
      </div>
    </section>
  );
}
