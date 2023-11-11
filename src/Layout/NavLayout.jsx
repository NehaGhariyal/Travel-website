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
            <footer>
               <div className="footer-section">
                <div className="footer-sec-1">
                    <h2>Jadoo.</h2>
                    <p>Book your trip in minute, <br>
                    </br> get full control for much longer.</p>
                </div>
                <div className="footer-sec-2">
                    <h3 className="sec-heading">Company</h3>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Mobile</li>
                </div>
                <div className="footer-sec-3">
                <h3 className="sec-heading">Contact</h3>
                    <li>Help/FAQ</li>
                    <li>Press</li>
                    <li>Affilates</li>
                </div>
                <div className="footer-sec-4">
                    <h3 className="sec-heading">More</h3>
                    <li>Airlinefees</li>
                    <li>Airline</li>
                    <li>Low fare tips</li>
                </div>
                </div>
                <p className="copyright">All rights reserved.</p>
            </footer>
            </>
    )
}