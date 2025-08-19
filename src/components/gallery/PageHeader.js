const PageHeader = () => {
  return (
    <div className="mb-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#231f1f] mb-6 leading-tight">
          Our <span className="text-[#095aa3]">Journey</span> in Pictures
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
          Moments from our <span className="text-[#095aa3] font-semibold">programs</span>,
          <span className="text-[#095aa3] font-semibold"> events</span>, and
          <span className="text-[#095aa3] font-semibold"> milestones</span> in agriculture,
          education, and business innovation.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#095aa3] to-[#b2c935] mx-auto rounded-full"></div>
      </div>
    </div>
  );
};

export default PageHeader;