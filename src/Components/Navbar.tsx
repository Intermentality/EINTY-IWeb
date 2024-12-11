import { Link } from "react-router-dom"

export default function Navbar(){
    return <nav className="Nav">
        <Link to="/">Home</Link>

        <ul>
            <li><Link to="/issues">Issues</Link></li>
            <li><Link to="/onepager">One Pager</Link></li>
            <li><Link to="/credits">Credits</Link></li>
        </ul>
    </nav>
}