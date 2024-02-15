import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Poppins, Fira_Code } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";

const fira = Fira_Code({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "400", "300", "200", "100"],
});

export const metadata: Metadata = {
  title: "Art.dev - Arthur Schumacher",
  description: "Meu portifólio em TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={`${poppins.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
