import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/mine/nav";
import Footer from "@/components/mine/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D'artistes | Agence de Web & Communication Visuelle",
  description: "D'artistes est une agence de design spécialisée en identité visuelle, branding et création de sites web. Nous transformons vos idées en créations artistiques percutantes pour votre marque.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        <main className=" flex flex-col gap-10 text-gray-900">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
