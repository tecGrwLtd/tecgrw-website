import CTA from "../CTA";

const CorporateCTASection = () => {
  return (
    <div className="bg-gradient-to-r from-[#095aa3] to-blue-600 rounded-xl shadow-xl overflow-hidden">
      <div className="p-8 text-center text-white space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg opacity-90 max-w-lg mx-auto leading-relaxed">
            Elevate your team's skills with our AI and Machine Learning corporate training programs.
          </p>
        </div>
        <CTA />
        <p className="text-sm opacity-75 max-w-md mx-auto">
          Have questions? Send us a WhatsApp message, drop us an email, or give us a call to find out more about this training.
        </p>
      </div>
    </div>
  );
};

export default CorporateCTASection;