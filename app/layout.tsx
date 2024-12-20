import { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import ClientLoader from "./ClientLoader";
import SnowfallLoader from "./SnowfallLoader";
import "./globals.css";

// Metadata export (server-side)
export const metadata: Metadata = {
  title: {
    default: "Zelda",
    template: "%s | zalda.xyz",
  },
  icons: {
    shortcut: "/ico.jpg",
  },
};


// Define font styles
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});


// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <ClientLoader>{children}</ClientLoader>
        <SnowfallLoader />
      </body>
    </html>
  );
}
