import { useFadeIn } from "@/hooks/useFadeIn";

const Vision = () => {
  const ref = useFadeIn<HTMLElement>();

  return (
    <section
      id="vision"
      ref={ref}
      className="fade-in-section bg-earth py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Subtle gold gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gold/5 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-playfair text-cream text-3xl sm:text-4xl font-bold text-center mb-10">
          The Larger Vision
        </h2>

        <p className="font-source-serif text-cream text-lg sm:text-xl leading-relaxed text-center mb-10">
          Jiv begins with poultry because it's the most accessible entry point —
          3 hens, ₹500, no land required. But the architecture is universal.
          Every biological asset that produces measurable economic activity can
          become a credit instrument. Every cooperative can become a bank.
          <br />
          <br />
          This isn't financial inclusion. It's financial sovereignty.
        </p>

        <p className="font-source-serif text-parchment text-base text-center leading-relaxed mb-12">
          From 500 households to 190 million. From poultry to the full
          bio-capital stack. From village cooperatives to India's first
          indigenous digital bank.
        </p>

        <div className="text-center">
          <a
            href="#"
            className="bg-copper text-earth font-source-serif font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
          >
            Read the Full Thesis →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vision;
