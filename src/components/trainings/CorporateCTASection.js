import Link from "next/link";

const CorporateCTASection = () => {
 return (
        <div className="bg-gradient-to-r from-[#095aa3] to-blue-600 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8 text-center text-white space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl lg:text-2xl font-bold">Ready to Train Your Team in AI?</h3>
              <p className="text-lg opacity-90 max-w-lg mx-auto leading-relaxed">Elevate your team&apos;s skills with our AI and Machine Learning corporate training programs.</p>
            </div>
            <Link
              href="/contact" 
              className="inline-block bg-[#9db82a] hover:bg-[#b2c935] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 transform hover:scale-105"
            >
              Talk to Us About Corporate Training
            </Link>
            <p className="text-sm opacity-75 max-w-md mx-auto">Send us a WhatsApp message, drop us an email, or give us a call at <span className="font-semibold">+250 795 583 795</span> to find out more about this training.</p>
          </div>
        </div>
    );
};

export default CorporateCTASection;
