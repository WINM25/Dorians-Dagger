import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Dorian’s Dagger — Pós-punk / Rock Alternativo",
  description: "Banda de pós-punk e rock alternativo de Catalão, GO. Ouça, conheça o rider e contrate.",
  openGraph: {
    title: "Dorian’s Dagger",
    description: "Pós-punk / Rock Alternativo — Catalão, GO",
    images: ["img/hero.jpg"],
    locale: "pt_BR",
    type: "website",
  }
};

export const viewport = { themeColor: "#0b0b0c", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
