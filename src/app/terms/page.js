import Link from "next/link";

export default function TermsOfUse() {
    return (
    <main className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#231f1f]">
      <section className="flex-1 container mx-auto px-4 pt-16 pb-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-[#095aa3] mb-6">Terms of Use</h1>
        <p className="mb-4">
          Welcome to <span className="font-semibold">tecGrw</span> (
          <a
            href="https://tecgrw.com"
            className="text-[#095aa3] underline"
          >
            https://tecgrw.com
          </a>
          ). By accessing or using our website, you agree to these Terms of Use.
        </p>
        <p className="mb-4">
          Our website serves as the digital gateway to tecGrw LTD — showcasing our
          services, solutions, and contact details. You agree not to misuse the
          site, attempt unauthorized access, or use the content for purposes
          other than informational and business engagement with us.
        </p>
        <p className="mb-4">
          Content on this site, including text, images, and branding, is the
          property of tecGrw unless otherwise stated. You may reference or share
          our content for informational purposes with proper attribution.
        </p>
        <p>
        For questions regarding these Terms, please reach out via our {" "}
        <Link href="/contact" className="text-[#095aa3]">
            Contact page
        </Link>
        </p>
      </section>
    </main>
  );
}
