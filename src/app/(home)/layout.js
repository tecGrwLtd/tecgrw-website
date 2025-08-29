import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    template: '%s | tecGrw Rwanda',
    default: 'tecGrw | Leading Agriculture Tech & AI Solutions in Rwanda',
  },
}

export default function HomeLayout ({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#231f1f]">
      <Navbar
        // initialBgColor="bg-transparent/"
        initialTextColor="text-white"
        initialHoverColor="hover:text-[#b2c935]"
        // scrolledBgColor="bg-white"
        scrolledTextColor="text-[#231f1f]"
        scrolledHoverColor="hover:text-[#b2c935]"
        scrolledShadow="shadow-md"
        changeOnScroll={false}
        scrollThreshold={0}
        useBackdrop={false}
      />
      <main className="flex-1">
        { children }
      </main>
      <Footer />
    </div>
  );
};
