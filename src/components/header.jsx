import { IoIosRocket } from 'react-icons/io'
import { useEffect, useState } from 'react'
import "./css/header.scss"
import { ImPhone } from "react-icons/im"

export default function Header() {
  const [num, setNum] = useState(0)
  useEffect(() => {
    const date = Math.floor((new Date() - new Date('2023-02-22')) / (1000 * 60))
    setNum(date + 50000)
  }, [num])

  const tel = 9876543210

  return (
    <>
      <div className="top_header">
        <div className="stats">
          <IoIosRocket className='graphIcon' color='#0FA958' />
          <div className='text'>
            <span>Patient Lead generated Till now</span>
            <h6>{num.toLocaleString()}</h6>
          </div>
        </div>
        <div className="call">
          <ImPhone className='callIcon' color="#0fa958" />
          <span className='tel'><a href={`tel:${tel}`}>{
            String(tel).slice(0, 3) + "-" + String(tel).slice(3, 6) + "-" + String(tel).slice(6)
          }</a></span>
        </div>
      </div >
    </>
  )
}