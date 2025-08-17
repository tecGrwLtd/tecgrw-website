const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center mb-8">
      <h2 className="text-2xl font-bold text-[#231f1f]">{title}</h2>
      <div className="ml-4 h-px bg-[#b2c935] flex-1"></div>
    </div>
  );
}

export default SectionHeader;
