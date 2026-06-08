import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm",
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
  return (
    <html lang="es" className={`${syne.variable} ${ibmPlex.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
