import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            {/* <img className="navbar--logo" src="logo.png"/> */}
            <h1 className="navbar--logo">Website name</h1>
            <nav>
                <ul className="menu-bar">
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
