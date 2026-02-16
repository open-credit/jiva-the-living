import { useFadeIn } from "@/hooks/useFadeIn";

const steps = [
  {
    title: "Register Bio-Capital",
    desc: "Register flocks, livestock, land. No bank needed, just a phone.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 text-copper" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="20" cy="16" rx="8" ry="10" />
        <path d="M14 26c-2 1-3 3-2 5h16c1-2 0-4-2-5" />
        <circle cx="17" cy="14" r="1.5" fill="currentColor" />
        <path d="M22 12c1 0 3 1 3 3" />
      </svg>
    ),
  },
  {
    title: "Track Productivity",
    desc: "Daily production data builds a living financial record. Offline-first.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 text-copper" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="14" cy="28" rx="5" ry="6" />
        <path d="M22 10v20M22 10l4 4M22 10l-4 4" />
        <path d="M26 18l4 2-4 2" />
        <path d="M30 14v16" />
      </svg>
    ),
  },
  {
    title: "Generate Credit Score",
    desc: "Bio productivity becomes a credit score. First AA-connected FIP for the informal economy.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 text-copper" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 6a14 14 0 0 1 0 28" />
        <path d="M20 6a14 14 0 0 0 0 28" strokeDasharray="4 3" />
        <path d="M20 20l-8-8" strokeWidth="2" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Access Finance",
    desc: "Scores unlock loans, insurance, markets via UPI / ONDC / eNAM.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 text-copper" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="14" cy="20" r="8" />
        <text x="11" y="24" fontSize="10" fill="currentColor" stroke="none" fontFamily="serif">₹</text>
        <path d="M22 20h12M30 16l4 4-4 4" />
      </svg>
    ),
  },
  {
    title: "Cooperative Growth",
    desc: "Cooperatives pool resources. Modelled on Amul. Scaled by digital rails.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8 text-copper" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="12" r="4" />
        <circle cx="10" cy="28" r="4" />
        <circle cx="30" cy="28" r="4" />
        <line x1="20" y1="16" x2="10" y2="24" />
        <line x1="20" y1="16" x2="30" y2="24" />
        <line x1="10" y1="28" x2="30" y2="28" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="how-it-works" ref={ref} className="fade-in-section bg-earth py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-cream text-3xl sm:text-4xl font-bold text-center mb-14">
          How Jiva Works
        </h2>

        <div className="relative">
          {/* Copper connecting line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-copper/30" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-6 relative">
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-soil border-2 border-copper flex items-center justify-center">
                  <span className="font-mono-dm text-copper text-xs font-bold">{i + 1}</span>
                </div>

                <div className="pt-1">
                  <h3 className="font-playfair text-cream text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="font-source-serif text-parchment text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
