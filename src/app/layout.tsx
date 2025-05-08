import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ESsoftwares",
  description: "A ESsoftware é especializada no desenvolvimento de sites institucionais e landing pages de alta performance, utilizando as melhores tecnologias do mercado",

    icons: {
      icon: "/fivicon.icon", // Ícone padrão
      shortcut: "/favicon.ico", // Ícone de atalho (iOS)
      apple: "/apple-touch-icon.png", // Ícone para dispositivos Apple (opcional)
    },
  };
  
  


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
