import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "400", "300", "200", "100"],
});

export const metadata: Metadata = {
  title: "Art.dev - Arthur Schumacher",
  description: "Meu portifólio em TypeScript.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={`${poppins.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>

        <Toaster
          toastOptions={{
            duration: 5000,
            style: {
              background: "#404040",
              color: "#fafafa",
            },
          }}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
