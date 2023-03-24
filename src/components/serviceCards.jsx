import './css/serviceCards.scss'

export default function ServiceCards({ data }) {
    return (
        <>
            <div className="service text-center">
                <div className="service-icon mb-8">
                    <img src={require(`../images/${data.icoUrl}`)} className="mb-8" alt={data.name} />
                </div>
                <h3>{data.name}</h3>
                <ul className='list-unstyled txt-3 mb-8 list-unstyled'>
                    <li>{data.info[0]}</li>
                    <li>{data.info[1]}</li>
                    <li>{data.info[2]}</li>
                </ul>
            </div>
        </>
    )
}
