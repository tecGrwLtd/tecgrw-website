"use client";

import { useActionState, useEffect } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";

import { emailSubscribe } from "@/actions/email.action"

const SubscriptionForm = () => {
  const [state, formAction, isPending] = useActionState(emailSubscribe, {success: false, message: ''});
  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
      const form = document.querySelector('form');
      form?.reset();
    } else{
      toast.error(state.message);
    }
  }, [state])
  return (
    <div className="space-y-6">
      <form action={formAction} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              disabled={isPending}
              className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#b2c935] focus:border-transparent transition-all duration-200 disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="px-6 py-3 bg-[#b2c935] hover:bg-[#9db82a] disabled:hover:bg-[#b2c935] text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl whitespace-nowrap disabled:cursor-not-allowed"
          >
            {isPending ? (
              <div className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Subscribe</span>
              </div>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </form>
      <p className="text-sm opacity-75 max-w-md mx-auto">
        Get notified about upcoming training events and opportunities.
      </p>
    </div>
  );
};


export default SubscriptionForm;