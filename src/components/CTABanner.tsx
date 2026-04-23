export default function CTABanner() {
  return (
    <section className="hero-gradient py-20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "rgba(0,48,135,0.4)" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(224,120,32,0.15)" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span
          className="inline-block font-semibold text-sm uppercase tracking-widest mb-4"
          style={{ color: "#E07820" }}
        >
          Limited Time Offer
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Start Your Journey to{" "}
          <span style={{ color: "#E07820" }}>Better Health</span> Today
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          Join over 2,400 customers who have transformed their bone health, heart health, and
          energy levels with NutriGlen K2 + D3.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#product"
            className="inline-flex items-center justify-center gap-2 text-white font-bold px-10 py-4 rounded-full text-lg shadow-2xl transition-all hover:-translate-y-1"
            style={{ background: "#E07820" }}
          >
            Shop Now — From $39.99
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#benefits"
            className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 text-blue-100 hover:bg-white/10 font-semibold px-10 py-4 rounded-full text-lg transition-all"
          >
            Learn the Science
          </a>
        </div>

        <p className="text-blue-200 text-sm mt-8">
          ✓ 30-Day Money-Back Guarantee &nbsp;·&nbsp; ✓ Free Shipping on Orders $50+ &nbsp;·&nbsp; ✓ Non-GMO
        </p>
      </div>
    </section>
  );
}
