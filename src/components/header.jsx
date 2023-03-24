import { IoIosRocket } from 'react-icons/io'
import { ImPhone } from 'react-icons/im'
import { useEffect, useState, useContext } from 'react'
import "./css/header.scss"
import { motion } from 'framer-motion'
import { Context } from '../Context'

export default function Header() {
  const [num, setNum] = useState(0)
  const { isOpen, toggleOpen } = useContext(Context)

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
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className='ds_menu'>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </div >
    </>
  )
}

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

const MenuToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="24" height="24" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
)