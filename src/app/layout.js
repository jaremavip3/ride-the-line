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

export const metadata = {
  title: "Ride the Line",
  description: "Ride the Line - A Documentary Film",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-full w-full ${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
