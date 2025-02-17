import type { Metadata } from "next";
import { Inter, Nunito_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import { Topbar } from "@/components/layout/topbar";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const heading = Nunito_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
})

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "MyFolio",
  description: "Create your own portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${heading.variable} ${pacifico.variable} antialiased bg-background`}
      >
        <Topbar />
        {children}
      </body>
    </html>
  );
}
