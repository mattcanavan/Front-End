import React from "react";
import { Link, BrowserRouter as Router} from "react-router-dom";

export default function Header() {

    const signOut = ( ) => {
        window.localStorage.removeItem('token');
    }

    return (
    
        <div className="header">
            <Link to="/" className="title">Expat Journal</Link>
            <nav className="nav-links">
                <Link className="nav-link" to ="/Signin">Login</Link>
                <Link className="nav-link" to ="/Signup">Register</Link>
                <Link className="nav-link" to ="/posts">stories</Link>
                <Link className="nav-link" to ="/Signin" onClick={signOut}>Sign out</Link>
            </nav>
        </div>
  
        
    )
}