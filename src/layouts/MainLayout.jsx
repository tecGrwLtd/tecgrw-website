import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#231f1f]">
      <Navbar
        initialBgColor="bg-[#095aa3]"
        initialTextColor="text-white"
        changeOnScroll={false}
      />
      <main className="flex-1 pt-16">
      <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
