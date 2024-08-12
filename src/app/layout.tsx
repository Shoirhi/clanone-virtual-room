import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const runtime = 'edge';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CLAN ONE バーチャル内見",
  description: "CLAN ONE のバーチャル内見をしよう！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-dvh">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
