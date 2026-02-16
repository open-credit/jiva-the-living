import { useFadeIn } from "@/hooks/useFadeIn";

const metrics = [
  { value: "₹500", label: "Starting investment (3 hens)" },
  { value: "130-175%", label: "Annual bio returns" },
  { value: "60-120×", label: "LTV / CAC ratio" },
  { value: "23.6×", label: "SROI" },
  { value: "₹100", label: "CAC per family" },
  { value: "30 months", label: "To self-sustainability" },
];

const ImpactMetrics = () => {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section id="impact" ref={ref} className="fade-in-section bg-warm-white py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-playfair text-earth text-3xl sm:text-4xl font-bold text-center mb-14">
          Impact That Compounds
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-cream/50 border border-bark rounded-xl p-6 text-center"
            >
              <div className="font-mono-dm text-gold text-3xl sm:text-4xl font-medium mb-2">
                {m.value}
              </div>
              <div className="font-source-serif text-soil text-sm">{m.label}</div>
            </div>
          ))}
        </div>

        <p className="font-source-serif text-soil italic text-center text-base sm:text-lg mt-12 max-w-2xl mx-auto">
          The hen has been banking for 8,000 years. We're finally learning to read her ledger.
        </p>
      </div>
    </section>
  );
};

export default ImpactMetrics;
