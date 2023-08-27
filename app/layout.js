import "./globals.css";
export const metadata = {
  title: "Ayush Mhetre",
  description: "Ayush Mhetre's personal website",
};
import "react-vertical-timeline-component/style.min.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
