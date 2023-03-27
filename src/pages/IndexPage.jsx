import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import ContactSection from "../components/contactSection";
import Header from "../components/header";

export default function IndexPage() {
  return (
    <>
      <div>
        <Header />
        <NavBar />
        <Outlet />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}