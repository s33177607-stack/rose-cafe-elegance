import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-rose text-white shadow-glow transition-all hover:scale-110 md:bottom-8 md:right-8"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
