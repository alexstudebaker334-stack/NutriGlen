const benefits = [
  {
    color: "green",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: "Heart Health",
    description:
      "Vitamin K2 directs calcium away from arteries and into bones, reducing arterial calcification and supporting healthy cardiovascular function.",
  },
  {
    color: "amber",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    title: "Bone Strength",
    description:
      "D3 boosts calcium absorption while K2 ensures it reaches your bones. Together they deliver unmatched support for bone density and skeletal health.",
  },
  {
    color: "green",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: "Immune Support",
    description:
      "Vitamin D3 is critical for activating immune defenses. Optimal D3 levels are linked to stronger immune responses and reduced inflammation.",
  },
  {
    color: "amber",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: "Energy & Mood",
    description:
      "Vitamin D3 receptors are present in brain tissue and play a key role in serotonin production, helping maintain energy levels and a positive mood.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Why NutriGlen
          </span>
          <div className="section-divider" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Science-Backed Benefits
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            The K2 + D3 combination is one of the most researched pairings in nutritional science.
            Here&apos;s what the research says they do for your body.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => {
            const isGreen = b.color === "green";
            return (
              <div
                key={b.title}
                className="card-hover bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col gap-5"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    isGreen ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-green-900 rounded-3xl p-8">
          {[
            { num: "97%", label: "Reported improved energy" },
            { num: "94%", label: "Noticed better bone wellness" },
            { num: "2,400+", label: "5-star reviews" },
            { num: "30-Day", label: "Money-back guarantee" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">{s.num}</div>
              <div className="text-green-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
