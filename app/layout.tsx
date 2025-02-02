import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "diary app",
  description: "Simple diary app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className= "mt-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-600 to-red-500 text-transparent bg-clip-text mb-4">DiaryApp</h1>
        </header>
        <main>{children}</main>
        <footer className="mt-2">
          <p>&copy; Hibiki Hangai</p>
        </footer>
      </body>
    </html>
  );
}
