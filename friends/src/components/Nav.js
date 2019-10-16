import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Nav = props => 
    <div className="nav">
        <nav>
            <Link to="/">About </Link>
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
        </nav>
    </div>

export default Nav; 