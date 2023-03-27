import { IoIosRocket } from 'react-icons/io'
import { ImPhone } from "react-icons/im"
import { useEffect, useState } from 'react'
import "./css/header.scss"

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
        <div className='container py-2 d-flex justify-content-between align-items-center'>
          <div className='d-flex gap-2 text-white justify-content-center align-items-center top-div' title='Total Leads Generated'>
            <IoIosRocket />
            <span>{num.toLocaleString()}</span>
          </div>
          <a href={`tel:${tel}`} className='text-decoration-none text-white d-flex gap-2 justify-content-center align-items-center top-div'>
            <ImPhone />
            <span>
              {
                String(tel).slice(0, 3) + "-" + String(tel).slice(3, 6) + "-" + String(tel).slice(6)
              }
            </span>
          </a>
        </div>
      </div>
    </>
  )
}