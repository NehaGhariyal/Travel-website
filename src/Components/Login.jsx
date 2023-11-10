import { NavLink } from "react-router-dom"

export default function Login(){
   return( <>
   <div className="form">
   <form className="form-container">
    <label>Username</label>
    <input type="text" required></input>
    <br></br>
    <br></br>
    <label>Password</label>
    <input type="password" required></input>
    <br></br>
    <br></br>
    <span>Forgot password?</span>
    <br></br>
    <br></br>
    <button>Login</button>
    <NavLink to='/Signup'><button>Sign Up</button></NavLink> 
   </form>
   <div className="main-pic">
        <img src="/main-pic.png" alt="" />
    </div>
   </div>
   
   </>
   )
}