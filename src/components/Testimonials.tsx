const reviews = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    avatar: "SM",
    avatarColor: "#003087",
    stars: 5,
    title: "My bones feel stronger than ever",
    body: "I started taking NutriGlen K2+D3 after my doctor mentioned my bone density was declining. After 3 months, my follow-up scan showed measurable improvement. My doctor was genuinely impressed. I tell everyone about this product now.",
    verified: true,
    weeks: "12 weeks",
  },
  {
    name: "James R.",
    location: "Denver, CO",
    avatar: "JR",
    avatarColor: "#E07820",
    stars: 5,
    title: "Energy levels completely transformed",
    body: "I've been deficient in D3 for years. Within 3 weeks of NutriGlen I noticed I was waking up without that foggy feeling. Now 2 months in and my energy is the best it's been in a decade. The quality is clearly different from drugstore vitamins.",
    verified: true,
    weeks: "8 weeks",
  },
  {
    name: "Linda K.",
    location: "Seattle, WA",
    avatar: "LK",
    avatarColor: "#1d4ed8",
    stars: 5,
    title: "Heart check-up results surprised my cardiologist",
    body: "My cardiologist mentioned my arterial health markers improved significantly. I've been taking K2+D3 supplements consistently and credit NutriGlen. The formulation is clean, no fillers, and the softgels are easy to swallow.",
    verified: true,
    weeks: "6 months",
  },
  {
    name: "Marcus T.",
    location: "Chicago, IL",
    avatar: "MT",
    avatarColor: "#001A4D",
    stars: 5,
    title: "Finally found a K2+D3 that actually works",
    body: "I tried three different brands before NutriGlen. This is the only one where I've noticed a real difference — less joint aching after workouts, better sleep, and my mood has leveled out noticeably. Worth every penny.",
    verified: true,
    weeks: "10 weeks",
  },
  {
    name: "Anna P.",
    location: "Miami, FL",
    avatar: "AP",
    avatarColor: "#C4651A",
    stars: 5,
    title: "My go-to supplement — reorder every month",
    body: "The shipping is fast, packaging is premium, and most importantly IT WORKS. My seasonal mood dips are gone. I also appreciate that the ingredients list is clean — MK-7 K2 and cholecalciferol D3, exactly what research recommends.",
    verified: true,
    weeks: "5 months",
  },
  {
    name: "Derek W.",
    location: "Phoenix, AZ",
    avatar: "DW",
    avatarColor: "#1e40af",
    stars: 5,
    title: "Skeptic turned believer",
    body: "I was skeptical about supplements but my wife convinced me to try. After bloodwork confirmed my D3 went from deficient to optimal and my calcium absorption improved, I'm a convert. The K2+D3 combination is genuinely smart science.",
    verified: true,
    weeks: "4 months",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: "#003087" }}
          >
            Real Results
          </span>
          <div className="section-divider" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="stars text-2xl">★★★★★</div>
            <span className="text-gray-600 text-lg">
              <strong className="text-gray-900">4.9 out of 5</strong> · 2,400+ verified reviews
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="card-hover bg-white rounded-3xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4"
            >
              {/* Stars + verified */}
              <div className="flex items-center justify-between">
                <div className="stars text-base">{"★".repeat(r.stars)}</div>
                {r.verified && (
                  <span
                    className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "#EBF4FF", color: "#003087" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Verified Purchase
                  </span>
                )}
              </div>

              {/* Title + body */}
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{r.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{r.body}&rdquo;</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: r.avatarColor }}
                  >
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.location}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 italic">{r.weeks} in</div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating breakdown */}
        <div className="mt-12 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
          <h3 className="text-center font-bold text-gray-900 text-xl mb-6">Rating Breakdown</h3>
          {[
            { stars: 5, pct: 92 },
            { stars: 4, pct: 5 },
            { stars: 3, pct: 2 },
            { stars: 2, pct: 0.5 },
            { stars: 1, pct: 0.5 },
          ].map((r) => (
            <div key={r.stars} className="flex items-center gap-3 mb-2">
              <span className="text-sm text-gray-600 w-8 text-right">{r.stars}★</span>
              <div className="flex-1 bg-gray-100 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full"
                  style={{ width: `${r.pct}%`, background: "#E07820" }}
                />
              </div>
              <span className="text-sm text-gray-500 w-8">{r.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
