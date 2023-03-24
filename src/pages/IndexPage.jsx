// import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import ContactSection from "../components/contactSection";
import Header from "../components/header";
import NavMenu from "../components/navMenu";

export default function IndexPage() {
  return (
    <>
      <div>
        <NavMenu />
        <Header />
        <Outlet />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}