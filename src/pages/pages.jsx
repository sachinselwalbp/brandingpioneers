import { Outlet } from 'react-router-dom'
import './css/post.scss'

export default function Pages() {
    return (
        <>
            <div className="about-container">
                <Outlet />
            </div>
        </>
    )
}
