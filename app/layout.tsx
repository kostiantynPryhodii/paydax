import type { Metadata } from "next";
import "./globals.css";
import { Geologica } from 'next/font/google'
import { AppProvider } from "@/components/AppContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geologica = Geologica({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-geologica',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Paydax",
  description: "Paydax",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geologica.variable}>
      <body className="antialiased">
        <AppProvider>
          {children}
          <SpeedInsights />
        </AppProvider>
      </body>
    </html>
  );
}
