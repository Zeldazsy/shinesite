import type { Metadata as MetadataType } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import ClientLoader from "./ClientLoader";
import SnowfallLoader from "./SnowfallLoader";

// Define font styles
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// Metadata object for the app
export const metadata: MetadataType = {
  title: "Shine Hub",
  metadataBase: new URL("https://fesolutions.xyz"),
  icons: {
    icon: [{ rel: "icon", url: "/unnamed.jpg" }],
  },
};


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
        <SnowfallLoader /> {/* Load the snowfall effect */}

      </body>
    </html>
  );
}
