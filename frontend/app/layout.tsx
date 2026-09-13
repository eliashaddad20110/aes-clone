import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Arab Episcopal School | Inclusive Education",
  description: "Integrating blind and low-vision students with sighted students since 2003. Located in Irbid, Jordan.",
  keywords: ["school", "education", "inclusion", "blind", "low-vision", "Jordan"],
  openGraph: {
    type: "website",
    url: "https://aeschool.org",
    title: "Arab Episcopal School",
    description: "Integrating blind and low-vision students with sighted students since 2003",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-navy-900">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        <div className="pt-16">
          <main id="main-content">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
