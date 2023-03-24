import './css/brandSection.scss'

export default function BrandSection({ brands, light, bordered, bg, pt, customTitle }) {
    return (
        <section className={(light ? '' : 'dark') + (bg ? ` ${bg}` : '') + " brand-section-container"}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={"brand-section " + (bordered ? 'bordered' : '') + (pt ? 'pt-60' : '')}>
                            <div className="section-tag text-center mb-40">{customTitle ? customTitle : 'Trusted by'}</div>
                            <div className="brands-container">
                                {
                                    brands.map((brand, index) =>
                                        <div className="brand" key={index}>
                                            <img loading='lazy' src={require(`../images/${brand.imgUrl}`)} alt={brand.name} className="img-fluid" />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}