import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vestfjends VVS | VVS-installatør i Skive og omegn",
  description:
    "Lokal VVS-installatør i Vridsted. Vi løser VVS-opgaver for private og erhverv i Skive-området. Ring 97 54 76 00 for hurtigt svar.",
  keywords: ["VVS", "VVS-installatør", "Skive", "Vridsted", "badeværelse", "varmeanlæg", "gasinstallation"],
  openGraph: {
    title: "Vestfjends VVS | VVS-installatør i Skive og omegn",
    description:
      "Lokal VVS-installatør i Vridsted. Ring 97 54 76 00 for hurtigt svar.",
    locale: "da_DK",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
