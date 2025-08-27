import CTA from "../CTA"

const UpcommingEvents = () => {
  return (
    <>
    <div className="mt-20">
        <div className="bg-gradient-to-r from-[#095aa3] to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-12 text-center text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready for our Next Training Event?
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                Join our upcoming in-house training.
              </p>
            </div>
            <CTA supportCTA={true}/>
          </div>
        </div>
    </div>
    </>
  )
}

export default UpcommingEvents