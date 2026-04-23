"use client";

import { useState } from "react";

const quantities = [1, 2, 3];

export default function Product() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const unitPrice = 39.99;
  const discountedPrice = qty >= 3 ? 32.99 : qty >= 2 ? 35.99 : unitPrice;
  const total = (discountedPrice * qty).toFixed(2);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block font-semibold text-sm uppercase tracking-widest mb-3"
            style={{ color: "#003087" }}
          >
            Our Product
          </span>
          <div className="section-divider" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            NutriGlen Vitamin K2 + D3
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Premium softgels with MK-7 form of K2 and cholecalciferol D3 — the most bioavailable forms available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — visual */}
          <div className="sticky top-24">
            <div
              className="rounded-3xl p-12 flex flex-col items-center gap-6"
              style={{ background: "linear-gradient(135deg, #EBF4FF 0%, #DBEAFE 100%)" }}
            >
              <svg viewBox="0 0 200 340" xmlns="http://www.w3.org/2000/svg" className="w-56 drop-shadow-2xl bottle-glow">
                <rect x="75" y="10" width="50" height="30" rx="6" fill="#001A4D"/>
                <rect x="70" y="36" width="60" height="10" rx="4" fill="#003087"/>
                <rect x="72" y="44" width="56" height="28" rx="4" fill="#EBF4FF"/>
                <rect x="30" y="70" width="140" height="250" rx="16" fill="#EBF4FF"/>
                <rect x="36" y="80" width="128" height="234" rx="12" fill="white"/>
                <rect x="36" y="80" width="128" height="70" rx="12" fill="#003087"/>
                <rect x="36" y="135" width="128" height="15" fill="#003087"/>
                <text x="100" y="108" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">NutriGlen</text>
                <rect x="60" y="113" width="80" height="1.5" fill="rgba(255,255,255,0.4)"/>
                <text x="100" y="128" textAnchor="middle" fill="#BFDBFE" fontSize="8" fontFamily="Arial" letterSpacing="2">PREMIUM SUPPLEMENTS</text>
                <text x="100" y="175" textAnchor="middle" fill="#1A1A2E" fontSize="15" fontWeight="bold" fontFamily="Arial">VITAMIN</text>
                <text x="100" y="197" textAnchor="middle" fill="#003087" fontSize="22" fontWeight="bold" fontFamily="Arial">K2 + D3</text>
                <line x1="52" y1="208" x2="148" y2="208" stroke="#e5e7eb" strokeWidth="1"/>
                <text x="100" y="225" textAnchor="middle" fill="#6b7280" fontSize="7.5" fontFamily="Arial">Bone Strength • Heart Health</text>
                <text x="100" y="238" textAnchor="middle" fill="#6b7280" fontSize="7.5" fontFamily="Arial">Immune Support</text>
                <rect x="62" y="248" width="76" height="22" rx="11" fill="#EBF4FF" stroke="#003087" strokeWidth="1.5"/>
                <text x="100" y="263" textAnchor="middle" fill="#003087" fontSize="9" fontWeight="bold" fontFamily="Arial">60 SOFTGELS</text>
                <rect x="36" y="290" width="128" height="24" rx="0" fill="#f9fafb"/>
                <text x="100" y="308" textAnchor="middle" fill="#9ca3af" fontSize="6.5" fontFamily="Arial">Third-Party Tested • GMP Certified</text>
                <rect x="32" y="72" width="18" height="200" rx="6" fill="rgba(255,255,255,0.15)"/>
              </svg>

              {/* Supplement facts strip */}
              <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-blue-100">
                <div className="text-xs font-bold text-gray-700 uppercase tracking-widest mb-3 text-center">Supplement Facts</div>
                <div className="space-y-2">
                  {[
                    { name: "Vitamin D3 (cholecalciferol)", amount: "5,000 IU", dv: "1,250%" },
                    { name: "Vitamin K2 (as MK-7)", amount: "100 mcg", dv: "83%" },
                  ].map((f) => (
                    <div
                      key={f.name}
                      className="flex justify-between text-xs text-gray-600 border-b border-gray-100 pb-1.5 last:border-0"
                    >
                      <span className="font-medium">{f.name}</span>
                      <span>{f.amount} <span className="text-gray-400">({f.dv} DV)</span></span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">60 softgels per bottle. 2 softgels per serving, 30 servings.</p>
              </div>
            </div>
          </div>

          {/* Right — purchase */}
          <div className="space-y-8">
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="stars text-xl">★★★★★</div>
              <span className="text-gray-600 text-sm">4.9 / 5 &nbsp;·&nbsp; 2,400+ reviews</span>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-gray-900">NutriGlen K2 + D3</h3>
              <p className="font-medium mt-1" style={{ color: "#003087" }}>60 Premium Softgels · 30-Day Supply</p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our premium K2 + D3 softgels deliver <strong>100 mcg of MK-7 K2</strong> and{" "}
              <strong>5,000 IU of D3</strong> per serving — the gold-standard forms recommended by
              leading nutritional researchers. Formulated with organic olive oil for optimal fat-soluble absorption.
            </p>

            {/* Key features */}
            <ul className="space-y-2.5">
              {[
                "MK-7 form — most bioavailable K2 available",
                "Cholecalciferol D3 — superior to D2 for raising blood levels",
                "Organic olive oil base for enhanced absorption",
                "Free from gluten, soy, dairy, and artificial additives",
                "Manufactured in an FDA-registered, GMP-certified facility",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-700 text-sm">
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: "#003087" }}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {/* Quantity + savings */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
              <div className="font-semibold text-gray-900">Select Quantity</div>
              <div className="grid grid-cols-3 gap-3">
                {quantities.map((q) => {
                  const price = q >= 3 ? 32.99 : q >= 2 ? 35.99 : unitPrice;
                  const savings = ((unitPrice - price) * q).toFixed(0);
                  const isSelected = qty === q;
                  return (
                    <button
                      key={q}
                      onClick={() => setQty(q)}
                      className="rounded-xl p-3 border-2 text-center transition-all"
                      style={
                        isSelected
                          ? { borderColor: "#003087", background: "#EBF4FF" }
                          : { borderColor: "#e5e7eb", background: "white" }
                      }
                    >
                      <div className="font-bold text-gray-900">{q}x</div>
                      <div className="text-xs font-semibold" style={{ color: "#003087" }}>${price}/ea</div>
                      {Number(savings) > 0 && (
                        <div className="text-xs font-bold mt-0.5" style={{ color: "#E07820" }}>Save ${savings}</div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-end justify-between pt-2 border-t border-gray-100">
                <div>
                  <div className="text-sm text-gray-500">Total</div>
                  <div className="text-3xl font-extrabold text-gray-900">${total}</div>
                  {qty === 1 && <div className="text-xs text-gray-400">+ free shipping over $50</div>}
                  {qty > 1 && (
                    <div className="text-xs font-medium" style={{ color: "#003087" }}>✓ Free shipping included</div>
                  )}
                </div>
                <div className="text-right text-sm">
                  {qty >= 3 && (
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "#FFF4E8", color: "#E07820" }}
                    >
                      BEST VALUE
                    </span>
                  )}
                  {qty === 2 && (
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: "#EBF4FF", color: "#003087" }}
                    >
                      POPULAR
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAdd}
                className={`w-full flex items-center justify-center gap-3 font-bold text-lg py-4 rounded-full transition-all shadow-xl text-white ${
                  added ? "scale-95 opacity-90" : "hover:-translate-y-1 hover:shadow-2xl"
                }`}
                style={{ background: added ? "#C4651A" : "#E07820" }}
              >
                {added ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Add to Cart — ${total}
                  </>
                )}
              </button>
              <button
                className="w-full text-white font-bold text-lg py-4 rounded-full transition-all shadow-xl hover:-translate-y-1 hover:opacity-90"
                style={{ background: "#003087" }}
              >
                Buy Now
              </button>
            </div>

            {/* Guarantee */}
            <div
              className="flex items-start gap-4 rounded-2xl p-5 border"
              style={{ background: "#EBF4FF", borderColor: "#BFDBFE" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#DBEAFE", color: "#003087" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-gray-900">30-Day Money-Back Guarantee</div>
                <div className="text-sm text-gray-600 mt-0.5">
                  Not satisfied? Return within 30 days for a full refund — no questions asked.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
