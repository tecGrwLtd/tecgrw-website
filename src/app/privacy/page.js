import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#231f1f]">
      <section className="flex-1 container mx-auto px-4 pt-16 pb-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-[#095aa3] mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At <span className="font-semibold">tecGrw</span>, accessible from{" "}
          <a
            href="https://tecgrw.com"
            className="text-[#095aa3] underline"
          >
            https://tecgrw.com
          </a>
          , we respect your privacy and are committed to protecting your personal
          information.
        </p>
        <p className="mb-4">
          The information we collect is limited to what you provide through our
          contact forms or newsletter subscription. This may include your name,
          email address, and company details. We use this information only to
          respond to inquiries, provide updates, and share relevant tecGrw
          content.
        </p>
        <p className="mb-4">
          We do not sell or share your data with third parties, except as
          required by law. All information is stored securely and used
          exclusively for communication with you.
        </p>
        <p>
          If you have any concerns or wish to request deletion of your data,
          please contact us through our {" "}
          <Link href="/contact" className="text-[#095aa3]">
            Contact page
          </Link>
        </p>
      </section>
    </main>
  );
}
