import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manish Kumar — Full-stack developer",
    template: "%s — Manish Kumar",
  },
  description:
    "Full-stack developer in Kolkata building web and mobile products end to end — interface, API, data model and deployment.",
  keywords: [
    "Manish Kumar",
    "full-stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "React Native",
    "freelance developer",
    "Kolkata",
  ],
  openGraph: {
    title: "Manish Kumar — Full-stack developer",
    description:
      "Full-stack developer in Kolkata building web and mobile products end to end.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${manrope.variable} ${bricolage.variable} ${plexMono.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only z-100 rounded-full bg-pine px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] text-chalk focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <NavBar />
        <main id="main">{children}</main>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#164437",
              color: "#f5f0e4",
              border: "1px solid #e86136",
              borderRadius: "999px",
              fontSize: "13px",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
