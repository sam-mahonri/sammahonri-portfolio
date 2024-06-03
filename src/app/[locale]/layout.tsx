import type { Metadata } from "next";
import { unbounded, dyslexia } from "@/styles/fonts";
import "@/styles/globals.scss";
import { NextThemeProvider } from "@/providers/themes";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Navbar from "@/components/all/Navbar";
import { Footer } from "@/components/all/Footer";
import Splash from "@/components/all/Splash";
import GoUp from "@/components/all/GoUp";


export const metadata: Metadata = {
  title: "Sam Mahonri",
  description: "Portfólio",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dyslexia.variable} ${unbounded.variable} dark`} suppressHydrationWarning={true}>
      <body >
          <NextIntlClientProvider messages={messages}>
            <NextThemeProvider>
              <Navbar />
              <Splash />
              <main>
                {children}
              </main>
              <GoUp />
              <Footer />
            </NextThemeProvider>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
