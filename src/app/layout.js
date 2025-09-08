import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata = {
  title: "tecGrw | Agriculture Tech & AI Solutions Rwanda | Hydroponics & Business AI",
  description: "tecGrw delivers cutting-edge agriculture technology and AI solutions in Rwanda. Specializing in smart farming, hydroponics, game park security, AI for business, and tech education for governments and enterprises.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tecgrw.com',
    title: 'tecGrw | Agriculture Tech & AI Solutions Rwanda',
    description: 'Leading agriculture technology and AI solutions for governments and businesses in Rwanda',
    siteName: 'tecGrw',
    images: [{ url: 'https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753948168/logo_uo6lrf.png', width: 1200, height: 630, alt: 'tecGrw Agriculture Technology and AI Solutions' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          {children}
          <GoogleAnalytics />
      </body>
    </html>
  );
}
