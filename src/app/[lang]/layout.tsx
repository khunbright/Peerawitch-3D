import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans_Thai } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getContent, languages, type Lang } from "@/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Geist has no Thai glyphs. Listing this after it in the font stack lets the
// browser fall back per glyph, so Latin stays Geist and Thai stays designed.
const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) return {};
  const { profile } = getContent(lang as Lang);
  const title = `${profile.name} — ${profile.role}`;

  return {
    title,
    description: profile.tagline,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", th: "/th" },
    },
    openGraph: { title, description: profile.tagline, type: "website", locale: lang },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!languages.includes(lang as Lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${plexThai.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#05070f] text-slate-200">{children}</body>
    </html>
  );
}
