import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

import "./globals.css";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-[100dvh] flex flex-col font-bold uppercase">
        {children}
      </body>
      <Analytics />
    </html>
  );
}
