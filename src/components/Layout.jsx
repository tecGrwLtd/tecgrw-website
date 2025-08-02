import Navbar from './Navbar'
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#231f1f]">
      <Navbar
        initialBgColor="bg-[#095aa3] shadow-md"
        initialTextColor="text-white"
        changeOnScroll={false}
      />
      <main className="flex-1 pt-16">
      {children}
      </main>
      <Footer />
    </div>
  );
}
export default Layout;
