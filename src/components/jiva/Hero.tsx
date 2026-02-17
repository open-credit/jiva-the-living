import { useEffect, useRef, useState } from "react";
import FlowerOfLife from "./FlowerOfLife";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Active Households" },
  { value: "₹100", label: "CAC per Family" },
  { value: "130-175%", label: "Bio Returns" },
  { value: "23.6×", label: "SROI" },
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-earth grain-overlay overflow-hidden"
    >
      {/* Flower of Life background with parallax */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.05}deg)`,
        }}
      >
        <FlowerOfLife
          className="w-[800px] h-[800px] text-cream"
          opacity={0.06}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        <h1
          className="font-playfair text-cream font-bold mb-4"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
        >
          Jiv · The Living Ledger
        </h1>

        <p className="font-cormorant text-parchment italic text-xl sm:text-2xl mb-6">
          India's first bio-digital bank
        </p>

        <p className="font-source-serif text-cream text-base sm:text-lg max-w-[700px] mx-auto mb-10 leading-relaxed">
          190 million rural households aren't poor. They hold the world's oldest
          currency — biological capital. Jiv is the exchange rate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#how-it-works"
            className="bg-copper text-earth font-source-serif font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            See How It Works
          </a>
          <a
            href="/blueprint"
            className="border border-copper text-copper font-source-serif font-semibold px-8 py-3 rounded-lg hover:bg-copper/10 transition-colors"
          >
            Read the Whitepaper
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-chevron-bounce text-copper mb-12">
          <ChevronDown className="mx-auto" size={32} />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono-dm text-gold text-2xl sm:text-3xl font-medium">
                {stat.value}
              </div>
              <div className="font-source-serif text-parchment text-sm mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
