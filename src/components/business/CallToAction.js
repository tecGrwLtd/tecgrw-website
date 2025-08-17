"use client";

import Link from "next/link";

const CallToAction = () => {
  return (
      <section className="py-16 lg:py-20 bg-gradient-to-r from-[#095aa3] to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-[#b2c935] font-semibold text-sm">Let's Build Together</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            AI isn't just for big corporations
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            It's for communities, too.
          </p>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Whether you're planning a pilot or scaling a national program, TecGrw is 
            your AI implementation partner. From ideation to deployment, we work 
            with your team to turn raw data into powerful action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-[#b2c935] hover:bg-[#9bb82d] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
            >
              Reach out to Us
            </Link>
          </div>
        </div>
      </section>
  )
}

export default CallToAction;
