import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function Dentists() {
  return (
    <>
      <Helmet>
        <title>Dentists</title>
      </Helmet>
      <Hero title="Dentists" parent="Our Speciality"/>
    </>
  )
}
