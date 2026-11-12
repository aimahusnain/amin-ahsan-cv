import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Amin Ahsan | Finance & Accounting Professional",
  description: "CV of Amin Ahsan, Finance & Accounting Professional.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}