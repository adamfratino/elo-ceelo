import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "elo cee-lo",
  description: "become the best at rng",
};

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-[100dvh] flex flex-col font-bold uppercase">
        {children}
      </body>
    </html>
  );
}
