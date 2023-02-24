import { Helmet } from "react-helmet"
import Hero from "../../components/Hero"

export default function GynaeSurgeons() {
  return (
    <>
      <Helmet>
        <title>Gynae Surgeons</title>
      </Helmet>
      <Hero title="Gynae Surgeons" parent="Our Services" />
    </>
  )
}