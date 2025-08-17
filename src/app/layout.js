import "./globals.css";

export const metadata = {
  title: "tecGrw | Agritech & AI Solutions in Kigali, Rwanda",
  description:
    "tecGrw is an agritech and artificial intelligence company based in Kigali, Rwanda. We specialize in smart greenhouses, controlled environment agriculture, and precision farming technologies. Our work includes training farmers, teaching AI to kids, delivering customized courses for adults, and building AI-powered business solutions. We empower communities and organizations with innovative, sustainable, and technology-driven growth in agriculture and beyond.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
