import React from "react";
import { Link } from "react-router-dom";
import logo from '../assests/images/logo1.png'
export default function Header() {

    const signOut = ( ) => {
        window.localStorage.removeItem('token');
    }

    return (

        <div className="header">
           <div>
           <img className='logo' src={logo} alt="Logo" />
           </div>
            <br></br>
            <nav className="nav-links">
                
                <Link className="nav-link"to="/">Home</Link>
                
                
                <Link className="nav-link" to ="/Signin">Login</Link>
                
                
                <Link className="nav-link" to ="/Signup">Register</Link>
                
                
                <Link className="nav-link" to ="/posts">Stories</Link>
                
                
                <Link className="nav-link" to ="/Signin" onClick={signOut}>Sign out</Link>
                
                
                <Link className="nav-link addBtn" to ="/posts/add">Add New Story</Link>
                
            </nav>
        </div>
  
        
    )
}