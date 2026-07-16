import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Kaushik Mandal — Lead Software Engineer";
  const description = "Backend systems, cloud-native delivery, and applied AI—an engineering field manual by Kaushik Mandal.";

  return {
    title,
    description,
    alternates: { canonical: origin },
    icons: {
      icon: "https://avatars.githubusercontent.com/u/8160199?v=4&s=64",
      shortcut: "https://avatars.githubusercontent.com/u/8160199?v=4&s=64",
    },
    openGraph: {
      title: "Kaushik Mandal — Backend · Cloud · AI",
      description: "Systems that stay calm under pressure.",
      type: "profile",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
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
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
