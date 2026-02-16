import { useFadeIn } from "@/hooks/useFadeIn";

const stack = [
  "Open Credit Core (Java / Spring Boot)",
  "Jiva Platform (Python FastAPI + React Native)",
  "India Stack (Aadhaar / UPI / ONDC / eNAM / AA)",
  "Offline-First Architecture",
];

const principles = [
  "Open source — MIT licensed",
  "Privacy-first — Aadhaar hashed",
  "Cooperative governance",
  "Harmony-aligned",
];

const Technology = () => {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="technology" ref={ref} className="fade-in-section bg-soil py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-cream text-3xl sm:text-4xl font-bold text-center mb-2">
          Built Open. Built to Last.
        </h2>
        <p className="font-cormorant text-parchment text-lg text-center mb-14">
          Financial inclusion infrastructure should never be proprietary.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* The Stack */}
          <div>
            <h3 className="font-cormorant text-cream text-xl font-semibold mb-6">The Stack</h3>
            <div className="flex flex-col gap-3">
              {stack.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-copper flex-shrink-0" />
                  {i < stack.length - 1 && (
                    <div className="absolute ml-[3px] mt-8 w-px h-4 bg-copper/30" />
                  )}
                  <span className="font-mono-dm text-cream text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Principles */}
          <div>
            <h3 className="font-cormorant text-cream text-xl font-semibold mb-6">Principles</h3>
            <div className="flex flex-col gap-3">
              {principles.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <svg viewBox="0 0 20 20" className="w-5 h-5 text-leaf flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 10l4 4 8-8" />
                  </svg>
                  <span className="font-source-serif text-cream text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-copper text-copper font-source-serif font-semibold px-8 py-3 rounded-lg hover:bg-copper/10 transition-colors"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Technology;
