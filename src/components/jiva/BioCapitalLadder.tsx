import { useFadeIn } from "@/hooks/useFadeIn";

const tiers = [
  {
    from: "Pastoralist",
    to: "Formalised Herder",
    desc: "GPS tracking, productivity scoring for mobile herds.",
    level: "top",
  },
  {
    from: "Farmer",
    to: "Asset-Registered Landholder",
    desc: "Register existing assets, convert to credit.",
    level: "mid",
  },
  {
    from: "Landless",
    to: "Poultry Keeper",
    desc: "₹500, 3 hens, no land required.",
    level: "bottom",
  },
];

const BioCapitalLadder = () => {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section ref={ref} className="fade-in-section bg-earth py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-cream text-3xl sm:text-4xl font-bold text-center mb-4">
          One Platform. Three Entry Points.
        </h2>
        <p className="font-cormorant text-parchment text-lg text-center mb-14">
          Every rung unlocks the next.
        </p>

        <div className="flex flex-col gap-4">
          {tiers.map((tier, i) => (
            <div
              key={tier.level}
              className="bg-soil border border-bark rounded-xl p-6 border-l-4 border-l-copper flex items-start gap-4"
              style={{ marginLeft: `${(2 - i) * 16}px` }}
            >
              {/* Up arrow */}
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-copper flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
              <div>
                <h3 className="font-playfair text-cream text-lg font-semibold">
                  {tier.from} → {tier.to}
                </h3>
                <p className="font-source-serif text-parchment text-sm mt-1">{tier.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BioCapitalLadder;
