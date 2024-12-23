import type { Metadata } from "next";
import { unbounded, dyslexia, mono, lexend } from "@/styles/fonts";
import "@/styles/globals.scss";
import { NextThemeProvider } from "@/providers/themes";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/all/Navbar";
import { Footer } from "@/components/all/Footer";
import Splash from "@/components/all/Splash";
import GoUp from "@/components/all/GoUp";
import StandaloneBackground from "@/components/all/StandaloneBackground";
import { TypingSM } from "@/components/ui/symbols/SM";
import { BadHourProvider } from "@/providers/BadHourProvider";
import { NewMusic } from "@/components/ui/alerts/MusicAlerts";

export const metadata: Metadata = {
  metadataBase: new URL('https://sammahonri.com'),
  title: {
    default: "Sam Mahonri",
    template: "%s | Sam Mahonri"
  },
  openGraph: {
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630
      }
    ]
  },
  description: "Portfólio de Sam Mahonri",
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${unbounded.variable} ${dyslexia.variable} ${mono.variable} ${lexend.variable} dark`} suppressHydrationWarning={true}>
      <body className="main-top bg-background">
        <BadHourProvider>
          <StandaloneBackground />
          <NextIntlClientProvider messages={messages}>
            <NextThemeProvider>
              <Navbar />
              <main className=" min-h-screen">
                {children}
              </main>
              <TypingSM />
              <GoUp />
              <NewMusic/>
              <Footer />
              <Splash />
            </NextThemeProvider>
          </NextIntlClientProvider>
        </BadHourProvider>

      </body>
    </html>
  );
}
