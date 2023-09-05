import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  title: "Ayush Mhetre",
  description: "Ayush Mhetre's personal website",
};
import "react-vertical-timeline-component/style.min.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="LAFLPJO73XDxXz1ZA7Oa8g_g3xdfcL24i9sEhlt9G6o"
      />
      <meta name="theme-color" content="#F5EFE7" />
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
