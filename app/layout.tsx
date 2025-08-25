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
  title: "Felipe Vadillo Drones - Inspecciones Industriales con Drones | Argentina",
  description: "Especialistas en inspecciones industriales con drones, termografía aérea, análisis térmico y producción audiovisual. Servicios profesionales para el sector energético y construcción en Argentina.",
  keywords: [
    "drones industriales",
    "inspecciones con drones",
    "termografía aérea",
    "análisis térmico",
    "paneles solares",
    "inspección industrial",
    "espacios confinados",
    "modelado 3D",
    "automatización drones",
    "Argentina",
    "Buenos Aires",
    "Felipe Vadillo"
  ],
  authors: [{ name: "Felipe Vadillo" }],
  creator: "Felipe Vadillo Drones",
  publisher: "Felipe Vadillo Drones",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://felipevadillodrones.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Felipe Vadillo Drones - Inspecciones Industriales con Drones",
    description: "Especialistas en inspecciones industriales con drones, termografía aérea y análisis térmico para el sector energético y construcción en Argentina.",
    url: 'https://felipevadillodrones.com',
    siteName: 'Felipe Vadillo Drones',
    images: [
      {
        url: '/Imagenes/Logo.svg',
        width: 120,
        height: 120,
        alt: 'Felipe Vadillo Drones Logo',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Felipe Vadillo Drones - Inspecciones Industriales con Drones",
    description: "Especialistas en inspecciones industriales con drones, termografía aérea y análisis térmico para el sector energético y construcción en Argentina.",
    images: ['/Imagenes/Logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Reemplazar con el código real
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#18a1ad" />
        <meta name="msapplication-TileColor" content="#18a1ad" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
