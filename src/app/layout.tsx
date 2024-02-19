import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import favicon from "@public/images/favicon/favicon.ico";
import "./globals.css";
import Header from "./components/layout/Header";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import SupabaseProvider from "./providers/SupabaseProvider";

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
        <SupabaseProvider>
          <AntdRegistry>
            <Header />
            <div className="pt-[152px] md:pt-0">
              {children}
            </div>
          </AntdRegistry>
        </SupabaseProvider>
      </body>
    </html>
  );
}
