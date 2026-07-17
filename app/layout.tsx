import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-sans-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "Kaushik Mandal — Lead Software Engineer";
const description = "Backend systems, cloud-native delivery, and applied AI—an engineering field manual by Kaushik Mandal.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  icons: {
    icon: "https://avatars.githubusercontent.com/u/8160199?v=4&s=64",
    shortcut: "https://avatars.githubusercontent.com/u/8160199?v=4&s=64",
  },
  openGraph: {
    title: "Kaushik Mandal — Backend · Cloud · AI",
    description: "Systems that stay calm under pressure.",
    type: "profile",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1733,
        height: 907,
        alt: "Kaushik Mandal — Backend, Cloud, AI. Systems that stay calm under pressure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik Mandal — Backend · Cloud · AI",
    description: "Systems that stay calm under pressure.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
