import "./globals.css";
import type { Metadata } from 'next';
import { Inter } from "next/font/google";
import clsx from "clsx";
import { createClient, repositoryName } from "@/prismicio";
import Header from "./components/header";
import { PrismicPreview } from "@prismicio/next";



const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


// implement dynamic metadata
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");


  return {
    title: settings.data.display || "Error :(",
    description: settings.data.display || "testing description",
    openGraph: {
      images: [""],
      // images: [settings.data.intro_ui.url || ""],
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
      
      <body className="bg-black text-white">
        <Header />
          {children}
        {/* <Footer /> */}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
      
    </html>
  );
}
