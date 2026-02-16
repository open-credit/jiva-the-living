import { useFadeIn } from "@/hooks/useFadeIn";

const cards = [
  {
    title: "Enclosure of Commons",
    desc: "Land wealth privatised. Holders became landless. Collective stewardship criminalised.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-copper" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="12" width="32" height="28" rx="2" />
        <path d="M8 20h32" />
        <path d="M16 12V8M32 12V8" />
        <path d="M20 28l4-4 4 4" />
        <line x1="24" y1="24" x2="24" y2="36" />
      </svg>
    ),
  },
  {
    title: "Monetization of Barter",
    desc: "Only ₹ transactions count. Exchange networks erased. Bio-exchange labelled 'subsistence'.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-copper" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M18 20c0-2.2 2.7-4 6-4s6 1.8 6 4-2.7 4-6 4-6 1.8-6 4 2.7 4 6 4 6-1.8 6-4" />
        <line x1="24" y1="12" x2="24" y2="16" />
        <line x1="24" y1="32" x2="24" y2="36" />
      </svg>
    ),
  },
  {
    title: "Formalization of Finance",
    desc: "Only bank collateral counts. Livestock-rich became 'unbanked'. Credit invisible by design.",
    icon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-copper" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 40h32" />
        <path d="M12 40V20" />
        <path d="M36 40V20" />
        <path d="M24 16V8" />
        <path d="M8 20l16-12 16 12" />
        <rect x="20" y="28" width="8" height="12" />
      </svg>
    ),
  },
];

const Problem = () => {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="problem" ref={ref} className="fade-in-section bg-soil py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-cream text-3xl sm:text-4xl font-bold text-center mb-3">
          The Problem Isn't Poverty. It's Legibility.
        </h2>
        <p className="font-cormorant text-parchment text-lg text-center max-w-2xl mx-auto mb-14">
          Three colonial-era interventions made bio-capital invisible to formal finance.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-card border border-bark rounded-xl p-6 flex flex-col gap-4"
            >
              {card.icon}
              <h3 className="font-playfair text-cream text-xl font-semibold">{card.title}</h3>
              <p className="font-source-serif text-parchment text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <blockquote className="mt-14 text-center max-w-3xl mx-auto">
          <p className="font-playfair text-gold italic text-lg sm:text-xl leading-relaxed">
            "Each theft follows the same pattern: delegitimize their currency, force them into yours,
            extract the difference."
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default Problem;
