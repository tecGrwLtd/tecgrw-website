import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center">
      <div className="mb-8">
      <h1 className="text-8xl font-bold text-[#b2c935] mb-4 animate-bounce">
        404
      </h1>
      </div>
      
      <h2 className="text-2xl font-bold mb-3 text-[#231f1f]">
        Page not found
      </h2>
      
      <p className="mb-8 text-gray-600 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      
      <Link 
        href="/" 
        className="px-6 py-3 rounded-lg bg-[#095aa3] text-white font-medium hover:bg-[#074a8a] transition-colors duration-200"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;