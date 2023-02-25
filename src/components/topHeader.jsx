import './css/topHeader.scss'
import { AiOutlineLineChart } from 'react-icons/ai'
import { ImPhone } from 'react-icons/im'
import { useEffect, useState } from 'react'

export default function TopHeader() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    const date = Math.floor((new Date() - new Date('2023-02-22')) / (1000 * 60 * 30))
    setNum(date + 90000)
  }, [])

  const tel = 9876543210

  return (
    <>
      <div className="top_header">
        <div className="stats">
          <AiOutlineLineChart className='graphIcon' color='#0FA958' />
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
      </div>
    </>
  )
}