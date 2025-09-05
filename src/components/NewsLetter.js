"use client";

import { useActionState, useState, useEffect } from "react";
import { toast } from "sonner";

import { emailSubscribe } from "@/actions/email.action";

const initialState = { success: false, message: '' }

const NewsLetter = () => {
  const [state, formAction, pending] = useActionState(emailSubscribe, initialState);
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!state.message) return;
    if (state.success) {
      setIsSuccess(true);
      toast.success(state.message);
      setEmail(""); 
      // Reset form and success state after 3 seconds
      const timer = setTimeout(() => {
        setIsSuccess(false);
        const form = document.querySelector('form');
        form?.reset();
      }, 3000);
      
      return () => clearTimeout(timer);
    } else if (state.success === false) {
      toast.error(state.message);
    }
  }, [state]);

  if (isSuccess) {
    return (
      <div className="space-y-4 min-w-0">
        <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#b2c935] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#231f1f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-semibold mb-2">Successfully subscribed!</p>
            {/* <p className="text-sm text-gray-300">Please check your email for confirmation.</p> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 min-w-0">
      <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
      <p className="text-sm text-gray-300 mb-4">Stay updated with our latest insights and innovations.</p>
      <form action={formAction} className="flex space-x-2 w-full">
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-[#b2c935] transition-colors duration-200 min-w-0"
          required
          disabled={pending}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={!email || pending}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#b2c935] to-[#9db82a] text-[#231f1f] font-semibold text-sm hover:from-[#095aa3] hover:to-[#074a8c] hover:text-white transition-all duration-200 flex-shrink-0 disabled:cursor-not-allowed"
        >
          {pending ? (
            <div className="flex items-center justify-center gap-2 min-w-[90px]">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Sending...</span>
            </div>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;