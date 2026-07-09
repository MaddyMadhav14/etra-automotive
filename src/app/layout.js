import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/intro.css";
import "./styles/footer.css";
import "./styles/not-found.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ETRA Automotive",
  description:
    "ETRA Automotive creates immersive automotive experiences, HMI concepts, configurators, CGI and realtime 3D mobility interfaces.",

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },

  metadataBase: new URL("https://etraautomotive.com"),

  openGraph: {
    title: "ETRA Automotive",
    description:
      "Immersive automotive experiences, HMI concepts, configurators and realtime mobility interfaces.",
    url: "https://etraautomotive.com",
    siteName: "ETRA Automotive",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ETRA Automotive",
    description:
      "Immersive automotive experiences, HMI concepts, configurators and realtime mobility interfaces.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
