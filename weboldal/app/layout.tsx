import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import { Inter, Playfair } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair({
  variable: "--font-serif",
  subsets: ["latin"],
});


 

export const metadata: Metadata = {
  title: "Celldömölki Tenisz Klub",
  description: "Prémium tenisz klub a dunántúlon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={cn(playfair.variable,  inter.variable)}
    >
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
      {process.env.NODE_ENV === "production" && <Analytics />}
    </html>
  );
}
