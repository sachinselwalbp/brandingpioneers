import './css/serviceCards.scss'

export default function ServiceCards({ data, src }) {
    return (
        <>
            <div className="service text-center">
                <div className="service-icon mb-8">
                    <img src={require(`../pages/assets/${src}/${data.icoUrl}`)} className="mb-8" alt={data.name} />
                </div>
                <h3>{data.name}</h3>
                <p className="txt-3 mb-8 list-unstyled">
                    <li>{data.info[0]}</li>
                    <li>{data.info[1]}</li>
                    <li>{data.info[2]}</li>
                </p>
            </div>
        </>
    )
}
