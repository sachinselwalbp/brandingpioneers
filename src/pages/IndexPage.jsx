import TopHeader from "../components/topHeader";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import ContactSection from "../components/contactSection";

export default function IndexPage() {
  return (
    <>
      <div>
        <TopHeader />
        <NavBar />
        <Outlet />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}