import "./globals.css";
import type { Metadata, ResolvingMetadata } from 'next';
import { Geist, Geist_Mono, Inter } from "next/font/google";
import clsx from "clsx";
import { createClient } from "@/prismicio";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// implement dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");


  return {
    title: settings.data.intro_quote || "Error :(",
    description: settings.data.intro_quote || "testing description",
    openGraph: {
      images: [settings.data.intro_ui.url || ""],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.variable)}>
      
      <body>
        <Header />
          {children}
        <Footer />
      </body>
      
    </html>
  );
}
