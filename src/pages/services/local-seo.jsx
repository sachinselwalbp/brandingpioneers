import { Helmet } from "react-helmet";
import Hero from "../../components/hero";

export default function LocalSEO() {
  return (
    <>
      <Helmet>
        <title>Local SEO</title>
      </Helmet>
      <Hero title="Local SEO" parent="Services" />
    </>
  )
}