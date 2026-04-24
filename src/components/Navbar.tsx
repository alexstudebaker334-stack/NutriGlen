"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Benefits", href: "#benefits" },
    { label: "Product", href: "#product" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Announcement bar — scrolls away naturally */}
      <div style={{ background: "#003087" }} className="text-white text-xs sm:text-sm text-center py-2.5 px-4 font-medium tracking-wide">
        FREE SHIPPING on orders over $50 &nbsp;·&nbsp; 30-Day Money-Back Guarantee &nbsp;·&nbsp;{" "}
        <a href="#product" className="underline underline-offset-2 hover:opacity-80 transition-opacity">Shop Now →</a>
      </div>

      {/* Main sticky header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shadow group-hover:opacity-90 transition-opacity"
                style={{ background: "#003087" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">
                Nutri<span style={{ color: "#003087" }}>Glen</span>
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="nav-link text-sm font-medium text-gray-600 hover:text-[#003087] transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* CTA button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#product"
                className="inline-flex items-center gap-2 font-semibold px-6 py-2.5 rounded-full text-sm text-white transition-all shadow hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "#E07820" }}
              >
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 pb-5 pt-2">
              <nav className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 font-medium px-4 py-3 rounded-lg transition-colors hover:bg-blue-50"
                    style={{ "--tw-text-opacity": "1" } as React.CSSProperties}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#003087")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#product"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 text-white font-semibold px-5 py-3 rounded-full text-center transition-opacity hover:opacity-90"
                  style={{ background: "#E07820" }}
                >
                  Shop Now
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
