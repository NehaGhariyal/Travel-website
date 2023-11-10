import { Outlet, NavLink } from "react-router-dom"

export default function NavLayout(){
    return(<>
            <header className="nav-bar">
                <div className="logo"><NavLink to="/">JAD<span>OO</span></NavLink></div>
                <div className="nav-options">
                <NavLink className="nav-links" to="/Destinations">Destinations</NavLink>
                <NavLink className="nav-links" to="/Hotels">Hotels</NavLink>
                <NavLink className="nav-links" to="/Flights">Flights</NavLink>
                <NavLink className="nav-links" to="/Bookings">Bookings</NavLink>
                <NavLink className="nav-links" to="/Login">Login</NavLink>
                <NavLink className="nav-links" to="/Signup"><button>Sign Up</button></NavLink>
                </div>
            </header>
           
            <Outlet/>
            </>
    )
}