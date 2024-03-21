import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import '../styles/main.scss'

function BasicLayout() {
  return (
    <>
      <Navbar />
        <main>
            <Outlet />
        </main>
      <Footer />
    </>
  );
}

export default BasicLayout;
