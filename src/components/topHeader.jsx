import './css/topHeader.scss'
import { GiChart } from 'react-icons/gi'

export default function TopHeader() {
  return (
    <>
      <div className="top_header">
        <div className="stats">
          <GiChart color='#0FA958' fontSize={32} />
          <div className='text'>
          <span>Our Clint</span>
          <h6>123456</h6>
          </div>
        </div>
      </div>
    </>
  )
}