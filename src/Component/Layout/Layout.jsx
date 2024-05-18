import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ContactTop from "../ContactTop/ContactTop"

const Layout = ({ children }) => {
  return (
    <>
      <ContactTop />
      <Navbar />
      <div className='main-content min-h-screen'>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
