import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tal-portfolio-ten.vercel.app"),
  title: "Tal Aharon | Software Developer (Games • Mobile • Web)",
  description:
    "Portfolio of Tal Aharon — Unity/C# games and mobile/web applications with clean architecture, real-world APIs, and polished UX.",
  openGraph: {
    title: "Tal Aharon | Software Developer",
    description:
      "Unity/C# games + mobile/web applications. Clean architecture, real-world APIs, polished UX.",
    url: "https://tal-portfolio-ten.vercel.app",
    siteName: "Tal Aharon Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tal Aharon Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tal Aharon | Software Developer",
    description:
      "Unity/C# games + mobile/web applications. Clean architecture, real-world APIs, polished UX.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="bg-hud" />
        {children}
      </body>
    </html>
  );
}
