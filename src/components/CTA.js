"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = ({ supportCTA }) => {
  return (
    <div className="space-y-6">
      <div>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-3 bg-[#9db82a] hover:bg-[#b2c935] text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl"
        >
          Get in Touch
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      
      {supportCTA && (
        <p className="text-sm opacity-75 max-w-md mx-auto">
          Have questions? Send us a WhatsApp message, drop us an email, or give us a call to find out more about this upcoming training.
        </p>
      )}
    </div>
  );
};

export default CTA;