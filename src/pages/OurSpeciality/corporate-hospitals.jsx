import Hero from "../../components/Hero";
import { Helmet } from "react-helmet";

export default function CorporateHospitals() {
  return (
    <>
      <Helmet>
        <title>Corporate Hospitals</title>
      </Helmet>
      <Hero title="Corporate Hospitals" parent="Corporate Hospitals" />
    </>
  )
}