import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import Script from 'next/script';
export const metadata: Metadata = {
  title: 'Ayush Mhetre',
  description: "Ayush Mhetre's personal website",
  openGraph: {
    images: '/opengraph-image.jpeg',
  },
  keywords: [
    'Ayush Mhetre',
    'Personal Website',
    'Portfolio',
    'Resume',
    'Blog',
    'Projects',
    'Contact',
    'About',
    'Frontend',
    'Backend',
    'Web developer',
  ],
};
import 'react-vertical-timeline-component/style.min.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="LAFLPJO73XDxXz1ZA7Oa8g_g3xdfcL24i9sEhlt9G6o" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#F5EFE7" />

      <Script type="text/javascript" strategy="beforeInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qtb097qi4e");`}
      </Script>

      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
