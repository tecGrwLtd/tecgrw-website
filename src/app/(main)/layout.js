import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// const Navbar = dynamic(() => import("@/components/Navbar"), {ssr: false});

export default function MainLayout({ children }){
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#231f1f]">
      <Navbar
        initialBgColor="bg-[#095aa3]"
        initialTextColor="text-white"
        changeOnScroll={false}
      />
      <main className="flex-1 pt-16">
      { children }
      </main>
      <Footer />
    </div>
  );
}

