import { IoIosRocket } from 'react-icons/io'
import { useEffect, useState } from 'react'
import "./css/header.scss"
import In from "../images/india.svg"
import Us from "../images/usa.svg"
import Uk from "../images/uk.svg"
import Cn from "../images/canada.svg"

export default function Header() {
  const [num, setNum] = useState(0)
  useEffect(() => {
    const date = Math.floor((new Date() - new Date('2023-02-22')) / (1000 * 60))
    setNum(date + 50000)
  }, [num])

  const tel = [
    {
      num: "+919789565515",
      flag: In
    },
    {
      num: " +16198379090",
      flag: Us
    },
    {
      num: "+447418608606",
      flag: Uk
    },
    {
      num: " +14383006695",
      flag: Cn
    },
  ]

  return (
    <>
      <div className="top_header">
        <div className='container py-2 d-flex justify-content-between align-items-center'>
          <div className='d-flex gap-2 text-white justify-content-center align-items-center top-div' title='Total Leads Generated'>
            <IoIosRocket />
            <span>{num.toLocaleString()}</span>
            <span style={{ fontSize: 14 }}>Leads <span style={{ fontSize: 14 }} className='d-none d-lg-inline'>Generated</span></span>
          </div>
          <div className='d-flex align-items-center gap-4'>
            {tel.map((e, i) => <PhoneNum key={i} tel={e} />)}
          </div>
        </div>
      </div>
    </>
  )
}

function PhoneNum({ tel }) {
  return (
    <>
      <a href={`tel:${tel.num}`} className='text-decoration-none text-white d-flex gap-2 justify-content-center align-items-center top-div phonenumber'>
        <img width={20} height={20} src={tel.flag} alt={tel.src} />
        <span>
          {
            String(tel.num).slice(0, 3) + "-" + String(tel.num).slice(3, 6) + "-" + String(tel.num).slice(6, 9) + "-" + String(tel.num).slice(9)
          }
        </span>
      </a>
    </>
  )
}