const steps = [
  {
    num: "01",
    title: "Order & Receive",
    description:
      "Place your order online and receive your NutriGlen K2+D3 within 3–5 business days, shipped in eco-friendly packaging.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Take Daily",
    description:
      "Take 2 softgels daily with a meal containing healthy fats for optimal absorption. Consistency is key — make it part of your routine.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Feel the Difference",
    description:
      "Within weeks, customers report stronger bones, better energy, improved mood, and enhanced heart health. Your body will thank you.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: "#003087" }}
          >
            Simple Process
          </span>
          <div className="section-divider" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Getting started with NutriGlen is effortless. Three simple steps to better health.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-1/6 right-1/6 h-0.5 z-0"
            style={{ background: "linear-gradient(90deg, #BFDBFE, #FED7AA, #BFDBFE)" }}
          />

          <div className="grid lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col items-center text-center gap-6">
                {/* Step circle */}
                <div
                  className="w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-xl border-4 text-white"
                  style={
                    i === 1
                      ? { background: "#E07820", borderColor: "#FED7AA" }
                      : { background: "#003087", borderColor: "#BFDBFE" }
                  }
                >
                  {s.icon}
                  <span className="text-xs font-bold mt-1 opacity-80">STEP {s.num}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Science note */}
        <div
          className="mt-20 rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center"
          style={{ background: "linear-gradient(135deg, #001A4D 0%, #003087 100%)" }}
        >
          <div>
            <div className="font-semibold text-sm uppercase tracking-widest mb-3" style={{ color: "#E07820" }}>
              The Science
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Why K2 and D3{" "}
              <span style={{ color: "#E07820" }}>Must Be Taken Together</span>
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Vitamin D3 dramatically increases calcium absorption in your gut. But without K2, that extra
              calcium can deposit in your arteries instead of your bones. K2 activates proteins that direct
              calcium exactly where it belongs — into bone tissue and away from soft tissue. Together, they
              work synergistically in a way neither can achieve alone.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Bone Mineral Density", value: "+12%", note: "vs. D3 alone" },
              { label: "Arterial Calcification", value: "-37%", note: "reduction in studies" },
              { label: "D3 Blood Levels", value: "↑ 65%", note: "with K2 co-admin" },
              { label: "Immune Activation", value: "3×", note: "faster response" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold" style={{ color: "#E07820" }}>{s.value}</div>
                <div className="text-white text-xs font-semibold mt-1">{s.label}</div>
                <div className="text-blue-200 text-xs mt-0.5">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
