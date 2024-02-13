import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import favicon from "@public/images/favicon.ico";
import "./globals.css";
import Header from "./layout/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({ subsets: ["latin"], variable: '--font-cinzel' });

export const metadata: Metadata = {
  title: "⌚ HORUS CATALOGO ⌚",
  description: "Catalogo de relojes - Horus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { src } = favicon;

  return (
    <html lang="es">
      <link rel="icon" href={src} type="image/x-icon" />
      <body className={`${inter.className} ${cinzel.variable}`}>
        <AntdRegistry>
          <div className="grid grid-rows-[1fr+auto]">
            <Header />
            <main className="h-full w-full block min-h-[calc(100dvh-144px)]">
              {children}
            </main>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
