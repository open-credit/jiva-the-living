import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FlowerOfLife from "./FlowerOfLife";

const navLinks = [
  { label: "About", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
  { label: "The Thesis", href: "#vision" },
  { label: "Open Source", href: "#technology" },
  { label: "Blueprint", href: "/blueprint" },
  { label: "Contact", href: "#footer" },
];

function NavItem({ link, className, onClick }: { link: typeof navLinks[0]; className: string; onClick?: () => void }) {
  if (link.href.startsWith("/")) {
    return (
      <Link to={link.href} className={className} onClick={onClick}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className={className} onClick={onClick}>
      {link.label}
    </a>
  );
}

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-earth shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <FlowerOfLife className="w-10 h-10" opacity={1} strokeWidth={3} gradient />
          <span className="font-playfair text-2xl text-cream tracking-wide font-bold">
            जीव
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavItem
              key={link.href}
              link={link}
              className="font-cormorant text-sm text-parchment hover:text-cream transition-colors"
            />
          ))}
          <a
            href="#footer"
            className="bg-copper text-earth font-cormorant text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Join the Movement
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-soil border-t border-bark animate-in slide-in-from-right">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                link={link}
                className="font-cormorant text-lg text-parchment hover:text-cream transition-colors"
                onClick={() => setMenuOpen(false)}
              />
            ))}
            <a
              href="#footer"
              onClick={() => setMenuOpen(false)}
              className="bg-copper text-earth font-cormorant text-lg font-semibold px-5 py-3 rounded-lg text-center hover:opacity-90 transition-opacity mt-2"
            >
              Join the Movement
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
