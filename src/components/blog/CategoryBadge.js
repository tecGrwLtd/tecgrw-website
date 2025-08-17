const CategoryBadge = ({ category, featured = false }) => {
  const baseClasses = "inline-block px-3 py-1 text-sm font-semibold rounded-full";
  const featuredClasses = "bg-[#b2c935] text-[#231f1f]";
  const regularClasses = "bg-gray-100 text-gray-600 font-medium";
  
  return (
    <span className={`${baseClasses} ${featured ? featuredClasses : regularClasses}`}>
      {category}
    </span>
  );
}

export default CategoryBadge;
