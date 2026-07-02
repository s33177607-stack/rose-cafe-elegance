import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowDown,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Star,
  Sparkles,
  Heart,
  Users,
  Cake,
  Utensils,
  Zap,
  Camera,
  Sofa,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Petals } from "@/components/site/Petals";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Gallery } from "@/components/site/Gallery";
import { MenuSection } from "@/components/site/MenuSection";
import { MenuPreview } from "@/components/site/MenuPreview";
import { heroVideo, aboutImage, heartCabin, heartCabin2, gallery } from "@/lib/assets";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="home" className="relative min-h-screen bg-rose-cream text-neutral-900">
      <SmoothScroll />
      <CursorGlow />
      <Petals />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <GallerySection />
      <PrivateDining />
      <MenuPreview />
      <ExperienceSection />
      <Reviews />
      <InstagramSection />
      <MenuSection />
      <Contact />
      <Footer />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={heroVideo}
          poster={aboutImage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-accent/30 via-transparent to-rose-pink/20 mix-blend-overlay" />

      {/* Floating glow particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white/80 animate-float-slow"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i * 0.4) % 6}s`,
              boxShadow: "0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(244,169,197,0.6)",
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs uppercase tracking-[0.4em]"
        >
          <Sparkles className="h-3 w-3" /> Guntur, Andhra Pradesh
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(30px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-6xl font-semibold leading-[0.95] md:text-8xl lg:text-[10rem]"
        >
          Rose <span className="italic text-rose-blush">Cafe</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-3 text-sm uppercase tracking-[0.5em] text-white/80"
        >
          Multi Cuisine Restaurant
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 max-w-3xl text-2xl font-light leading-tight md:text-4xl"
        >
          "Where every meal becomes a <em className="text-rose-blush">beautiful memory</em>."
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-5 max-w-xl text-base text-white/80"
        >
          Luxury ambience, romantic interiors, delicious food, and unforgettable moments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-gradient-rose px-7 py-3.5 text-sm text-white shadow-glow transition-all hover:scale-105 btn-font"
          >
            <span className="relative z-10">Reserve Table</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#menu"
            className="rounded-full glass-dark px-7 py-3.5 text-sm text-white transition-all hover:scale-105 btn-font"
          >
            Explore Menu
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const dur = 1600;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(to * eased));
      if (p < 1) requestAnimationFrame(step);
      else setVal(to);
    };
    requestAnimationFrame(step);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-rose opacity-40 blur-2xl" />
          <div className="overflow-hidden rounded-[2.5rem] ring-1 ring-white/60 shadow-glow">
            <img
              src={aboutImage}
              alt="Rose Cafe interior with floral ceiling"
              loading="lazy"
              className="h-[520px] w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-rose-accent">
            About Rose Cafe
          </div>
          <h2 className="text-4xl font-semibold md:text-6xl">
            Experience dining like <span className="text-gradient-rose italic">never before</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            Rose Cafe is designed to create memorable dining experiences — luxurious interiors,
            romantic private seating, handcrafted décor, and delicious multi-cuisine food, all
            wrapped in a soft rose glow.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              { n: 2000, s: "+", l: "Happy Customers" },
              { n: 4.7, s: "★", l: "Google Rating" },
              { n: 100, s: "+", l: "Delicious Dishes" },
              { n: 0, s: "Luxury", l: "Ambience" },
            ].map((c, i) => (
              <div key={i} className="rounded-3xl glass p-6">
                <div className="font-display text-4xl font-semibold text-gradient-rose md:text-5xl">
                  {c.n === 4.7 ? "4.7" : c.n === 0 ? "Luxury" : <><Counter to={c.n} />{c.s}</>}
                  {c.n === 4.7 ? "★" : null}
                </div>
                <div className="mt-2 text-sm text-neutral-500">{c.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Sofa, title: "Luxury Seating" },
    { icon: Heart, title: "Private Cabins" },
    { icon: Camera, title: "Instagram Worthy" },
    { icon: Users, title: "Family Friendly" },
    { icon: Cake, title: "Birthday Decoration" },
    { icon: Utensils, title: "Fresh Food" },
    { icon: Zap, title: "Fast Service" },
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end"
        >
          <h2 className="max-w-2xl text-4xl font-semibold md:text-6xl">
            Little things that make dining <em className="text-gradient-rose">unforgettable</em>.
          </h2>
          <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">Features</div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-rose opacity-30 blur-2xl transition-opacity group-hover:opacity-70" />
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-rose text-white shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-display text-xl font-semibold">{f.title}</div>
                <div className="mt-2 text-sm text-neutral-500">
                  Crafted for a magical experience.
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-rose-accent">
            Gallery
          </div>
          <h2 className="text-5xl font-semibold md:text-7xl">
            An <span className="text-gradient-rose italic">Instagram-worthy</span> world.
          </h2>
          <p className="mt-4 text-neutral-600">
            Floral ceilings, neon hearts, heart-shaped cabins — every corner of Rose Cafe is a
            photograph waiting to be taken.
          </p>
        </motion.div>
        <Gallery />
      </div>
    </section>
  );
}

function PrivateDining() {
  return (
    <section id="private" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="relative order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-rose-accent">
              Private Dining
            </div>
            <h2 className="text-4xl font-semibold md:text-6xl leading-tight">
              A cabin made for <span className="text-gradient-rose italic">two hearts</span>.
            </h2>
            <p className="mt-6 max-w-md text-lg text-neutral-600">
              Celebrate birthdays, anniversaries, proposals, surprises — or simply spend quality
              time together in a heart-shaped private cabin, wrapped in petals and neon.
            </p>
            <ul className="mt-8 space-y-3 text-neutral-700">
              {["Luxury seating", "Romantic décor", "Private atmosphere"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-rose text-white">
                    <Heart className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-gradient-rose px-6 py-3 text-white shadow-glow transition-all hover:scale-105 btn-font"
            >
              Book Your Private Cabin
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative order-1 md:order-2"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-rose opacity-40 blur-3xl animate-glow-pulse" />
          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-white/60">
              <img
                src={heartCabin}
                alt="Heart-shaped private cabin"
                loading="lazy"
                className="h-[420px] w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-white/60">
                <img src={heartCabin2} alt="Rose wall" loading="lazy" className="h-40 w-full object-cover" />
              </div>
              <div className="rounded-[1.5rem] glass p-5">
                <div className="text-3xl font-display font-semibold text-gradient-rose">100%</div>
                <div className="mt-1 text-xs text-neutral-500">Private &amp; Intimate</div>
                <div className="mt-4 text-xs text-neutral-500">
                  Perfect for surprises, anniversaries and quiet dates.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-rose-ink py-28 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-rose-accent/30 blur-3xl animate-glow-pulse" />
        <div className="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-rose-pink/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl text-6xl font-semibold leading-[0.95] md:text-8xl"
        >
          More than food. <br />
          <span className="text-gradient-rose italic">An experience.</span>
        </motion.h2>
        <p className="mt-6 max-w-xl text-white/70">
          Every visit is cinematic — soft light, floral ceilings, and glowing neon that hums with
          love.
        </p>
      </div>

      <motion.div style={{ x }} className="mt-16 flex gap-6 pl-[10%]">
        {gallery.map((g, i) => (
          <div
            key={i}
            className="relative h-[420px] w-[320px] shrink-0 overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-glow"
          >
            <img src={g.url} alt={g.title} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <div className="text-sm text-white/90">{g.title}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

const reviewsList = [
  { name: "Ananya R.", text: "The interiors are magical — felt like stepping into a rose garden. The biryani was outstanding.", avatar: "A" },
  { name: "Karthik S.", text: "Booked the heart cabin for our anniversary. My wife was in tears. Beautiful, private, romantic.", avatar: "K" },
  { name: "Priya M.", text: "Every corner is Instagram-worthy. Service was fast and the mocktails were amazing.", avatar: "P" },
  { name: "Rahul V.", text: "The Rose Cafe Special Biryani is a must-try. Loved the vibe and the neon walls.", avatar: "R" },
  { name: "Sneha T.", text: "Perfect place for a birthday surprise. The décor team went above and beyond.", avatar: "S" },
  { name: "Vikram J.", text: "Butter chicken and naan hit the spot. Definitely coming back with the whole family.", avatar: "V" },
];

function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviewsList.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-12 flex flex-col items-center gap-4 text-center"
        >
          <div className="flex text-rose-accent">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <h2 className="text-5xl font-semibold md:text-7xl">
            <span className="text-gradient-rose">4.7</span> · loved by 2000+
          </h2>
          <p className="max-w-xl text-neutral-600">Real words from real guests on Google.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviewsList.map((r, k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: k * 0.05 }}
              className={`rounded-3xl glass p-7 transition-all ${
                i === k ? "ring-2 ring-rose-accent/50 shadow-glow -translate-y-1" : ""
              }`}
            >
              <div className="mb-4 flex text-rose-accent">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-neutral-700">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rose text-sm font-semibold text-white">
                  {r.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-neutral-500">Google Review</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-rose opacity-90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-10 flex flex-col items-center gap-3 text-center text-white"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.3em]">
            <Instagram className="h-3 w-3" /> @rosecafe_guntur
          </div>
          <h2 className="text-5xl font-semibold md:text-7xl">Follow the pink diary.</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.slice(0, 8).map((g, k) => (
            <motion.a
              key={k}
              href="https://www.instagram.com/rosecafe_guntur/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: k * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl ring-1 ring-white/40"
            >
              <img
                src={g.url}
                alt={g.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/rosecafe_guntur/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-rose-accent shadow-glow transition-all hover:scale-105 btn-font"
          >
            <Instagram className="h-4 w-4" /> Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-rose-accent">
            Visit Us
          </div>
          <h2 className="text-5xl font-semibold md:text-7xl">
            Come find <span className="text-gradient-rose italic">the pink door</span>.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/60 shadow-glow lg:col-span-3">
            <iframe
              title="Rose Cafe Guntur map"
              src="https://www.google.com/maps?q=Rose+Cafe+Guntur&output=embed"
              loading="lazy"
              className="h-[480px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="rounded-3xl glass p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rose text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm text-neutral-500">Location</div>
                  <div className="font-semibold">Rose Cafe, Guntur, Andhra Pradesh</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl glass p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rose text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm text-neutral-500">Phone</div>
                  <div className="font-semibold">+91 96668 63864</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl glass p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rose text-white">
                  <Clock className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-sm text-neutral-500">Working Hours</div>
                  <div className="font-semibold">11:00 AM – 11:00 PM · Daily</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+919666863864"
                className="flex-1 rounded-full bg-gradient-rose px-5 py-3 text-center text-white shadow-glow transition-all hover:scale-105 btn-font"
              >
                Call Now
              </a>
              <a
                href="https://www.google.com/maps?q=Rose+Cafe+Guntur"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full bg-white/70 px-5 py-3 text-center text-neutral-800 ring-1 ring-white/70 backdrop-blur-md transition-all hover:bg-white btn-font"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
              ["About", "#about"],
              ["Gallery", "#gallery"],
              ["Menu", "#menu"],
              ["Private Dining", "#private"],
              ["Reviews", "#reviews"],
              ["Contact", "#contact"],
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
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +91 96668 63864</li>
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
