import type { Metadata } from "next";
import { Geist, Geist_Mono, ADLaM_Display } from "next/font/google";
import "./globals.css";
import MainLayout from '../components/layout/MainLayout';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Configure a fonte ADLaM Display
const adlamDisplay = ADLaM_Display({
  variable: "--font-adlam-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hiça Peroni",
  description: "Portfólio de Hiça Peroni Advogada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} ${adlamDisplay.variable}`}>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}