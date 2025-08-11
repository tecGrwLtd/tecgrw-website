import teamMembers from '../assets/data/teamMembers';

const MeetOurTeam = () => {
  return (
    <section className="py-10 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#231f1f] mb-4">
            Meet Our Team
        </h2>
        <p className="text-lg text-[#231f1f]/70 max-w-3xl mx-auto">
            Get to know the passionate people behind Tecgrw's mission to revolutionize agriculture through innovative technology solutions.
        </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
            <div 
            key={index}
            className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
            {/* Member Image */}
            <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                {member.image ? (
                    <img 
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-[#b2c935] shadow"
                    />
                ) : (
                    <div className="w-20 h-20 bg-[#b2c935] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold text-[#231f1f]">
                        {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                    </div>
                )}
                </div>
            </div>

            {/* Member Info */}
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#231f1f] mb-1">
                {member.name}
                </h3>
                
                <p className="text-[#b2c935] font-semibold mb-4">
                {member.role}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed italic">
                "{member.quote}"
                </p>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
  )
}

export default MeetOurTeam