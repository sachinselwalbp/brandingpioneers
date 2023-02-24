import { Helmet } from "react-helmet";
import Hero from "../../components/Hero";

export default function DiagnosticCentres() {
  return (
    <>
      <Helmet>
        <title>Diagnostic Centres</title>
      </Helmet>
      <Hero title="Diagnostic Centres" parent="Our Speciality" />
    </>
  )
}