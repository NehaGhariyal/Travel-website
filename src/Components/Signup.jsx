import { NavLink } from "react-router-dom"

export default function Signup(){

 

    return(
        <>
        <div className="form">
        <form className="form-container">
         <label>Enter username</label>
         <input type="text" id='username' required></input>
         <br></br>
         <br></br>
         <label>Enter phone number</label>
         <input type="number"  id='phone' required></input>
         <br></br>
         <br></br>
         <label>Enter email</label>
         <input type="email"  id='email' required></input>
         <br></br>
         <br></br>
         <label>Create password</label>
         <input type="password" id="password" required></input>
         <br></br>
         <br></br>
          <button id='signup'>Sign Up</button>
          <NavLink to='/Login'><button>Login</button></NavLink>
        </form>
        <div className="main-pic">
             <img src="/main-pic.png" alt="" />
         </div>
        </div>
        
        </>

    )
    }