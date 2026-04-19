import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutriGlen – Premium Vitamin K2 + D3 Supplement",
  description:
    "NutriGlen's Vitamin K2 + D3 delivers clinically-studied nutrients for bone strength, heart health, and immune support. Made with premium ingredients, third-party tested.",
  keywords: "vitamin K2, vitamin D3, bone health, heart health, supplements, NutriGlen",
  openGraph: {
    title: "NutriGlen – Premium Vitamin K2 + D3",
    description: "Bone strength. Heart health. Immune support. All in one.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
