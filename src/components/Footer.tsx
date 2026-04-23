"use client";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={{ background: "#001A4D" }} className="text-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "#003087" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-white">
                Nutri<span style={{ color: "#E07820" }}>Glen</span>
              </span>
            </a>
            <p className="text-sm text-blue-300 leading-relaxed mb-5">
              Premium supplements formulated with science-backed ingredients for real, measurable results.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {(
                [
                  { label: "Instagram", d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7H8v-7a6 6 0 016-6zM2 9h4v12H2z" },
                  { label: "Facebook", d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { label: "Twitter", d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                ] as { label: string; d: string }[]
              ).map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E07820")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Product</div>
            <ul className="space-y-2.5 text-sm">
              {["Vitamin K2 + D3", "Ingredients", "Supplement Facts", "How to Use", "Subscribe & Save"].map((l) => (
                <li key={l}>
                  <a
                    href="#product"
                    className="transition-colors hover:text-white"
                    style={{ color: "#93c5fd" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E07820")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#93c5fd")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Company</div>
            <ul className="space-y-2.5 text-sm">
              {["About NutriGlen", "Our Mission", "Quality Standards", "Press", "Careers"].map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{ color: "#93c5fd" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E07820")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#93c5fd")}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Support</div>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "mailto:support@nutriglenplus.com" },
                { label: "Shipping Policy", href: "#" },
                { label: "Return Policy", href: "#" },
                { label: "Privacy Policy", href: "#" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="transition-colors"
                    style={{ color: "#93c5fd" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E07820")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#93c5fd")}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Email signup */}
            <div className="mt-6">
              <div className="text-white font-semibold text-sm mb-3">Get 15% Off Your First Order</div>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 border rounded-lg px-3 py-2 text-sm text-white placeholder-blue-400 focus:outline-none transition-colors"
                  style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}
                />
                <button
                  type="submit"
                  className="text-white px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ background: "#E07820" }}
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-center sm:text-left" style={{ color: "#4b6cb7" }}>
              © {year} NutriGlen. All rights reserved.
            </p>
            <p className="text-xs text-center sm:text-right max-w-xl" style={{ color: "#4b6cb7" }}>
              * These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
