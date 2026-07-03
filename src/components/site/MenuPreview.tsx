import { menuCategories } from "@/lib/menu-data";

const featuredIds = ["nv-biryani", "veg-biryani", "nv-tandoori", "seafood", "continental", "mocktails"];
const featuredCategories = menuCategories.filter((c) => featuredIds.includes(c.id));

export function MenuPreview() {
  return (
    <section id="menu" className="relative py-16 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-rose-blush/60 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-rose-pink/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-rose-accent">
            The Menu
          </div>
          <h2 className="text-3xl font-semibold sm:text-5xl md:text-7xl">
            <span className="text-gradient-rose">Curated</span> for every craving
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 sm:text-base">
            Multi-cuisine plates crafted with love — from smoky Andhra classics to Continental
            comfort, biryanis, mocktails and dessert.
          </p>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4">
          {featuredCategories.map((cat) => (
            <div
              key={cat.id}
              className="flex w-[78%] shrink-0 snap-center flex-col rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow sm:w-[320px]"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{cat.icon}</div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>

              <ul className="mt-5 flex-1 space-y-2.5">
                {cat.items.slice(0, 4).map((item, i) => (
                  <li key={item.name + i} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-neutral-700">{item.name}</span>
                    <span className="whitespace-nowrap font-semibold text-rose-accent">
                      ₹{item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`/menu#${cat.id}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-rose-accent transition-colors hover:text-rose-ink"
              >
                See More in {cat.title} →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-2 text-center text-xs text-neutral-400 md:hidden">
          ← Swipe to see more categories →
        </div>

        <div className="mt-8 text-center">
          <a
            href="/menu"
            className="inline-flex rounded-full bg-gradient-rose px-7 py-3.5 text-sm text-white shadow-glow transition-all hover:scale-105 btn-font"
          >
            View Full Menu &amp; Search
          </a>
        </div>
      </div>
    </section>
  );
}
