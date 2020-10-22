import React from "react";
import { Link, BrowserRouter as Router} from "react-router-dom";
import logo from './images/logo1.png'
export default function Footer() {

    const signOut = ( ) => {
        window.localStorage.removeItem('token');
    }

    return (
    
        <div className="footer">
         
            <br></br>
            
            <nav className="nav-links">
                <div className='button'>
                <Link className="nav-link"to="/">Expat Journal</Link>
                </div>
                <div className='button'>
                <Link className="nav-link" to ="/Signin">Login</Link>
                </div>
                <div className='button'>
                <Link className="nav-link" to ="/Signup">Register</Link>
                </div>
                <div className='button'>
                <Link className="nav-link" to ="/posts">stories</Link>
                </div>
                <div className='button'>
                <Link className="nav-link" to ="/Signin" onClick={signOut}>Sign out</Link>
                </div>
                <div className='button'>
                <Link className="nav-link" to ="/posts/add">ADD new post</Link>
                </div>
                <div>
           <img className='logo2' src={logo} alt="Logo" />;
           </div>
               
            </nav>
           
        </div>
  
        
    )
}
