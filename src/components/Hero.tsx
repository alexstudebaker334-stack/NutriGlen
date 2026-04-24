export default function Hero() {
  return (
    <section className="hero-light py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle decorative circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,48,135,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-32 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(224,120,32,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div className="space-y-6">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full border"
              style={{ background: "#EBF4FF", borderColor: "#BFDBFE", color: "#003087" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              #1 Trusted Vitamin Supplement
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Fuel Your Body With{" "}
              <span style={{ color: "#003087" }}>K2 + D3</span>
              <br />
              <span style={{ color: "#E07820" }}>The Power Duo</span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl">
              Scientifically formulated Vitamin K2 (MK-7) paired with Vitamin D3 to promote
              <strong className="text-gray-900"> bone density</strong>,{" "}
              <strong className="text-gray-900">heart health</strong>, and{" "}
              <strong className="text-gray-900">immune strength</strong> — naturally.
            </p>

            {/* Micro trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
              {["Third-Party Tested", "Non-GMO", "GMP Certified", "Made in the USA"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="font-bold" style={{ color: "#003087" }}>✓</span>
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "#E07820" }}
              >
                Shop Now — $39.99
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center justify-center gap-2 border-2 font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-blue-50"
                style={{ borderColor: "#003087", color: "#003087" }}
              >
                Learn More
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {(["#1e40af", "#1d4ed8", "#2563eb", "#3b82f6"] as string[]).map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: c }}
                  >
                    {["S", "M", "J", "A"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="stars text-sm">★★★★★</div>
                <div className="text-gray-500 text-sm">
                  <strong className="text-gray-900">4.9/5</strong> from 2,400+ happy customers
                </div>
              </div>
            </div>
          </div>

          {/* Right — product visual */}
          <div className="flex justify-center items-center">
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Card glow bg */}
              <div className="absolute inset-4 rounded-3xl bg-white shadow-2xl" />

              {/* Bottle SVG */}
              <div className="bottle-glow relative mx-auto w-64 h-auto pt-8 pb-4">
                <svg viewBox="0 0 200 340" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-xl">
                  {/* Cap */}
                  <rect x="75" y="10" width="50" height="30" rx="6" fill="#001A4D"/>
                  <rect x="70" y="36" width="60" height="10" rx="4" fill="#003087"/>
                  {/* Neck */}
                  <rect x="72" y="44" width="56" height="28" rx="4" fill="#EBF4FF"/>
                  {/* Body */}
                  <rect x="30" y="70" width="140" height="250" rx="16" fill="#EBF4FF"/>
                  {/* Label background */}
                  <rect x="36" y="80" width="128" height="234" rx="12" fill="white"/>
                  {/* Navy header stripe */}
                  <rect x="36" y="80" width="128" height="70" rx="12" fill="#003087"/>
                  <rect x="36" y="135" width="128" height="15" fill="#003087"/>
                  {/* Brand name */}
                  <text x="100" y="108" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">NutriGlen</text>
                  <rect x="60" y="113" width="80" height="1.5" fill="rgba(255,255,255,0.4)"/>
                  <text x="100" y="128" textAnchor="middle" fill="#BFDBFE" fontSize="8" fontFamily="Arial" letterSpacing="2">PREMIUM SUPPLEMENTS</text>
                  {/* Product name */}
                  <text x="100" y="175" textAnchor="middle" fill="#1A1A2E" fontSize="15" fontWeight="bold" fontFamily="Arial">VITAMIN</text>
                  <text x="100" y="197" textAnchor="middle" fill="#003087" fontSize="22" fontWeight="bold" fontFamily="Arial">K2 + D3</text>
                  <line x1="52" y1="208" x2="148" y2="208" stroke="#e5e7eb" strokeWidth="1"/>
                  <text x="100" y="225" textAnchor="middle" fill="#6b7280" fontSize="7.5" fontFamily="Arial">Bone Strength • Heart Health</text>
                  <text x="100" y="238" textAnchor="middle" fill="#6b7280" fontSize="7.5" fontFamily="Arial">Immune Support</text>
                  <rect x="62" y="248" width="76" height="22" rx="11" fill="#EBF4FF" stroke="#003087" strokeWidth="1.5"/>
                  <text x="100" y="263" textAnchor="middle" fill="#003087" fontSize="9" fontWeight="bold" fontFamily="Arial">60 SOFTGELS</text>
                  <rect x="36" y="290" width="128" height="24" rx="0" fill="#f9fafb"/>
                  <text x="100" y="308" textAnchor="middle" fill="#9ca3af" fontSize="6.5" fontFamily="Arial">Third-Party Tested • GMP Certified</text>
                  {/* Shine */}
                  <rect x="32" y="72" width="18" height="200" rx="6" fill="rgba(255,255,255,0.15)"/>
                </svg>
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-16 bg-white rounded-2xl shadow-xl px-4 py-3 text-center border border-gray-100">
                <div className="text-2xl font-extrabold" style={{ color: "#003087" }}>30</div>
                <div className="text-xs text-gray-500 font-medium">Day<br/>Guarantee</div>
              </div>
              <div className="absolute -left-4 bottom-16 bg-white rounded-2xl shadow-xl px-4 py-3 text-center border border-gray-100">
                <div className="text-2xl font-extrabold" style={{ color: "#E07820" }}>★4.9</div>
                <div className="text-xs text-gray-500 font-medium">2,400+<br/>Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider to white */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,40 C360,0 720,60 1080,30 C1260,15 1380,50 1440,40 L1440,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
