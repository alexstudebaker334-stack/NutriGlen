"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is the difference between K1 and K2?",
    a: "Vitamin K1 (phylloquinone) is primarily involved in blood clotting and is found in leafy greens. Vitamin K2 (menaquinone, particularly the MK-7 form) has a much longer half-life in the body and specifically targets bone and cardiovascular tissue — directing calcium into bones and away from arteries. NutriGlen uses the MK-7 form of K2 for maximum effectiveness.",
  },
  {
    q: "Why D3 and not D2?",
    a: "Vitamin D3 (cholecalciferol) is the same form your body naturally produces from sunlight and is far superior at raising and maintaining blood vitamin D levels compared to D2 (ergocalciferol). Multiple studies show D3 is roughly 87% more effective at raising serum 25(OH)D concentrations than D2.",
  },
  {
    q: "How long until I see results?",
    a: "Many customers notice improved energy and mood within 2–3 weeks. Benefits to bone density and cardiovascular health are more gradual — most customers report noticeable changes after 8–12 weeks of consistent use. Blood test improvements in vitamin D levels are typically seen within 4–6 weeks.",
  },
  {
    q: "Is it safe to take 5,000 IU of Vitamin D3?",
    a: "5,000 IU is a clinically common dose for adults who are D-deficient, which is the majority of the population. It's well within the established safe range (the tolerable upper limit is 10,000 IU/day for adults). We always recommend discussing supplementation with your healthcare provider if you have any medical conditions.",
  },
  {
    q: "Are there any side effects?",
    a: "NutriGlen K2+D3 is well-tolerated by most adults. Side effects are rare and generally only occur with extreme overdosing. If you are on blood-thinning medications (like warfarin), consult your doctor before taking K2, as it can affect clotting time.",
  },
  {
    q: "Is NutriGlen suitable for vegans?",
    a: "Our current formulation uses softgel capsules derived from gelatin, making it non-vegan. We use organic olive oil as the carrier for fat-soluble absorption. We are actively developing a vegan-certified capsule version — sign up for our newsletter to be notified at launch.",
  },
  {
    q: "What is your return policy?",
    a: "We offer a 30-day money-back guarantee. If you're not completely satisfied for any reason, contact our customer support team within 30 days of purchase and we'll issue a full refund — no questions asked. We want you to be confident in your purchase.",
  },
  {
    q: "How should I store my NutriGlen supplements?",
    a: "Store in a cool, dry place away from direct sunlight. Do not refrigerate. Keep out of reach of children. The recommended storage temperature is 59–77°F (15–25°C).",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Got Questions?
          </span>
          <div className="section-divider" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know about NutriGlen K2 + D3.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 ${
                open === i ? "border-green-200 bg-green-50/50 shadow-sm" : "border-gray-200 bg-white"
              }`}
            >
              <button
                className="w-full flex items-center justify-between text-left gap-4 px-6 py-5"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-900 text-base sm:text-lg">{faq.q}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                    open === i ? "bg-green-600 text-white rotate-45" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </div>
              </button>

              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-green-900 rounded-3xl p-10">
          <div className="text-white text-xl font-bold mb-2">Still have questions?</div>
          <p className="text-green-200 mb-6">Our team is available 7 days a week to help you.</p>
          <a
            href="mailto:support@nutriglenplus.com"
            className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
