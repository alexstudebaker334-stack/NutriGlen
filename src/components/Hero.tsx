export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-600/20 blur-3xl" />
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div className="text-white space-y-6 relative z-10">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-green-700/50 border border-green-500/40 text-green-200 text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              #1 Trusted Vitamin Supplement
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Fuel Your Body With{" "}
              <span className="text-green-400">K2 + D3</span>
              <br />
              <span className="text-amber-400">The Power Duo</span>
            </h1>

            <p className="text-green-100 text-lg sm:text-xl leading-relaxed max-w-xl">
              Scientifically formulated Vitamin K2 (MK-7) paired with Vitamin D3 to promote
              <strong className="text-white"> bone density</strong>,{" "}
              <strong className="text-white">heart health</strong>, and{" "}
              <strong className="text-white">immune strength</strong> — naturally.
            </p>

            {/* Micro trust signals */}
            <div className="flex flex-wrap gap-4 text-sm text-green-200">
              {[
                { icon: "✓", text: "Third-Party Tested" },
                { icon: "✓", text: "Non-GMO" },
                { icon: "✓", text: "GMP Certified" },
                { icon: "✓", text: "Made in the USA" },
              ].map((item) => (
                <span key={item.text} className="flex items-center gap-1.5">
                  <span className="text-green-400 font-bold">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-amber-500/40 transition-all hover:-translate-y-1"
              >
                Get Started Today
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-400 text-green-300 hover:bg-green-400/10 font-semibold px-8 py-4 rounded-full text-lg transition-all"
              >
                Learn More
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {["#4ade80","#22c55e","#16a34a","#15803d"].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-green-800 flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: c }}
                  >
                    {["S","M","J","A"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="stars text-sm">★★★★★</div>
                <div className="text-green-200 text-sm">
                  <strong className="text-white">4.9/5</strong> from 2,400+ happy customers
                </div>
              </div>
            </div>
          </div>

          {/* Right — product visual */}
          <div className="flex justify-center items-center relative z-10">
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-green-400/20 blur-2xl scale-110" />

              {/* Bottle SVG mockup */}
              <div className="bottle-glow relative mx-auto w-64 h-auto">
                <svg viewBox="0 0 200 340" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
                  {/* Cap */}
                  <rect x="75" y="10" width="50" height="30" rx="6" fill="#166534"/>
                  <rect x="70" y="36" width="60" height="10" rx="4" fill="#15803d"/>

                  {/* Neck */}
                  <rect x="72" y="44" width="56" height="28" rx="4" fill="#f0fdf4"/>

                  {/* Body */}
                  <rect x="30" y="70" width="140" height="250" rx="16" fill="#f0fdf4"/>

                  {/* Label background */}
                  <rect x="36" y="80" width="128" height="234" rx="12" fill="white"/>

                  {/* Green header stripe */}
                  <rect x="36" y="80" width="128" height="70" rx="12" fill="#16a34a"/>
                  <rect x="36" y="135" width="128" height="15" fill="#16a34a"/>

                  {/* Brand name */}
                  <text x="100" y="108" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">NutriGlen</text>
                  <rect x="60" y="113" width="80" height="1.5" fill="rgba(255,255,255,0.4)"/>
                  <text x="100" y="128" textAnchor="middle" fill="#bbf7d0" fontSize="8" fontFamily="Arial" letterSpacing="2">PREMIUM SUPPLEMENTS</text>

                  {/* Product name */}
                  <text x="100" y="175" textAnchor="middle" fill="#14532d" fontSize="15" fontWeight="bold" fontFamily="Arial">VITAMIN</text>
                  <text x="100" y="197" textAnchor="middle" fill="#16a34a" fontSize="22" fontWeight="bold" fontFamily="Arial">K2 + D3</text>

                  {/* Divider */}
                  <line x1="52" y1="208" x2="148" y2="208" stroke="#e5e7eb" strokeWidth="1"/>

                  {/* Descriptor text */}
                  <text x="100" y="225" textAnchor="middle" fill="#6b7280" fontSize="7.5" fontFamily="Arial">Bone Strength • Heart Health</text>
                  <text x="100" y="238" textAnchor="middle" fill="#6b7280" fontSize="7.5" fontFamily="Arial">Immune Support</text>

                  {/* Count badge */}
                  <rect x="62" y="248" width="76" height="22" rx="11" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
                  <text x="100" y="263" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold" fontFamily="Arial">60 SOFTGELS</text>

                  {/* Bottom bar */}
                  <rect x="36" y="290" width="128" height="24" rx="0" fill="#f9fafb"/>
                  <rect x="36" y="302" width="128" height="12" rx="0" fill="#f9fafb"/>
                  <text x="100" y="308" textAnchor="middle" fill="#9ca3af" fontSize="6.5" fontFamily="Arial">Third-Party Tested • GMP Certified</text>

                  {/* Shine */}
                  <rect x="32" y="72" width="18" height="200" rx="6" fill="rgba(255,255,255,0.15)"/>
                </svg>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-16 bg-white rounded-2xl shadow-xl px-4 py-3 text-center">
                <div className="text-2xl font-extrabold text-green-700">30</div>
                <div className="text-xs text-gray-500 font-medium">Day<br/>Guarantee</div>
              </div>
              <div className="absolute -left-4 bottom-20 bg-white rounded-2xl shadow-xl px-4 py-3 text-center">
                <div className="text-2xl font-extrabold text-amber-600">★4.9</div>
                <div className="text-xs text-gray-500 font-medium">2,400+<br/>Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,60 C240,0 480,80 720,50 C960,20 1200,80 1440,40 L1440,80 L0,80 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
