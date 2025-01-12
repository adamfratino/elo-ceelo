import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elo Cee-lo",
  description: "Become the best at RNG.",
};

export default function RootLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-[100dvh] flex flex-col">
        {children}
      </body>
    </html>
  );
}
