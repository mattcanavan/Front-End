import React from "react";
import { Link, BrowserRouter as Router} from "react-router-dom";
import logo from './images/logo1.png'


export default function Footer() {

    const signOut = ( ) => {
        window.localStorage.removeItem('token');
    }

    return (

        <div className="footer">
            {/* <br></br>
            <nav className="nav-links">
                
                <Link className="nav-link button" to="/">Home</Link>
                
                
                <Link className="nav-link button" to ="/Signin">Login</Link>
                
                
                <Link className="nav-link button" to ="/Signup">Register</Link>
                
                
                <Link className="nav-link button" to ="/posts">Stories</Link>
                
                
                <Link className="nav-link button" to ="/Signin" onClick={signOut}>Sign out</Link>
                
                
                <Link className="nav-link addBtn" to ="/posts/add">Add New Story</Link>
                
            </nav>
            <div>
            <img className='logo' src={logo} alt="Logo" />
           </div> */}
           <h5>copywrite 2020</h5>
        </div>
  
        
    )
}