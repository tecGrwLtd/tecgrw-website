
const VisualCollage = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-[400px]">
        {/* Main large image */}
        <div className="col-span-2 row-span-1 relative overflow-hidden rounded-xl shadow-lg">
        <img
            src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1753948409/mahama_greenhouse_rjbkku.jpg"
            alt="Smart Greenhouse"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#095aa3]/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold text-lg">Smart Agriculture</h3>
            <p className="text-sm opacity-90">smart green house solutions</p>
        </div>
        </div>
        {/* Bottom left image */}
        <div className="relative overflow-hidden rounded-xl">
        <img
            src="https://res.cloudinary.com/dx8m9dy9d/image/upload/v1754304806/al_students_bow_graduation_day_pkwbv8.jpg"
            alt="Students learning programming and AI concepts"
            className="w-full h-full object-cover"
        />
        {/* from-[#b2c935]/70 to-transparent */}
        <div className="absolute inset-0 bg-gradient-to-t"></div>
        <div className="absolute bottom-3 left-3 text-white">
            <h4 className="font-semibold text-sm">AI Education</h4>
            <p className="text-xs opacity-90">Future innovators</p>
        </div>
        </div>
        {/* Bottom right image */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
            src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Business team using AI-powered analytics"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#231f1f]/70 to-transparent"></div>
        <div className="absolute bottom-3 left-3 text-white">
            <h4 className="font-semibold text-sm">Business AI</h4>
            <p className="text-xs opacity-90">Smart solutions</p>
        </div>
        </div>
    </div>
  )
}

export default VisualCollage