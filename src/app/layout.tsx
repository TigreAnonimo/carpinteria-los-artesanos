import type { Metadata } from "next";
import { headers } from "next/headers";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carpinteria-los-artesanos.vercel.app"),
  title: {
    default: "Carpintería Los Artesanos | Muebles a medida y restauración",
    template: "%s | Carpintería Los Artesanos",
  },
  description:
    "Taller de carpintería artesanal en Madrid. Muebles a medida, restauración de antigüedades y carpintería estructural con materiales nobles desde 1987.",
  keywords: [
    "carpintería artesanal",
    "muebles a medida",
    "restauración muebles",
    "carpintería Madrid",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Carpintería Los Artesanos",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "/";

  return (
    <html lang="es" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header pathname={pathname} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
