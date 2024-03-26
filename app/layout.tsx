import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ayush Mhetre",
  description: "Ayush Mhetre's personal website",
  openGraph: {
    images: "/opengraph-image.jpeg",
  },
  keywords: [
    "Ayush Mhetre",
    "Personal Website",
    "Portfolio",
    "Resume",
    "Blog",
    "Projects",
    "Contact",
    "About",
    "Frontend",
    "Backend",
    "Web developer",
  ],
};
import "react-vertical-timeline-component/style.min.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="LAFLPJO73XDxXz1ZA7Oa8g_g3xdfcL24i9sEhlt9G6o"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#F5EFE7" />
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
