import type { Metadata } from "next";
import { Geist, Delius } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const delius = Delius({
  variable: "--font-delius",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Bounce Habits",
  description: "Because you always bounce back up!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${delius.variable} ${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
