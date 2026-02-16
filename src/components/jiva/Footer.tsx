import FlowerOfLife from "./FlowerOfLife";

const Footer = () => (
  <footer id="footer" className="bg-earth-darker py-16 px-4 sm:px-6">
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <FlowerOfLife className="w-7 h-7 text-copper" opacity={0.8} />
          <span className="font-playfair text-cream text-lg">जीवा</span>
        </div>
        <p className="font-source-serif text-parchment text-sm">Setient Ltd</p>
        <p className="font-cormorant text-parchment/70 text-sm italic mt-1">
          Infrastructure for Consciousness
        </p>
      </div>

      {/* Quick links */}
      <div>
        <h4 className="font-cormorant text-cream text-base font-semibold mb-4">Quick Links</h4>
        <div className="flex flex-col gap-2">
          {["About", "How It Works", "Impact", "Technology", "Vision"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, "-")}`}
              className="font-source-serif text-parchment text-sm hover:text-cream transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-cormorant text-cream text-base font-semibold mb-4">Contact</h4>
        <div className="flex flex-col gap-2">
          <a href="mailto:hello@setient.com" className="font-source-serif text-parchment text-sm hover:text-cream transition-colors">
            hello@setient.com
          </a>
          <a href="#" className="font-source-serif text-parchment text-sm hover:text-cream transition-colors">
            LinkedIn
          </a>
          <a href="#" className="font-source-serif text-parchment text-sm hover:text-cream transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </div>

    <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-bark">
      <p className="font-source-serif text-parchment/60 text-xs text-center">
        © 2025 Setient Ltd · Open Credit Core is MIT licensed
      </p>
    </div>
  </footer>
);

export default Footer;
