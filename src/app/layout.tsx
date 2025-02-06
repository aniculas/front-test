import "./globals.css";
import type { Metadata, ResolvingMetadata } from 'next';
import { Geist, Geist_Mono, Inter } from "next/font/google";
import clsx from "clsx";
import { createClient } from "@/prismicio";

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

  const page = await client.getSingle("settings");


  return {
    title: page.data.intro_quote || "Error :(",
    description: page.data.intro_quote || "testing description",
    openGraph: {
      images: [page.data.intro_ui.url || ""],
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
        <header>test header</header> 
          {children}
        <footer>Test</footer>
      </body>
      
    </html>
  );
}
