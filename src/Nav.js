import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';



function Nav() {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">React</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-3"><Link to="/home" className="nav-link">
                    Home</Link>
                </li>
                <li className="nav-item mx-3"><Link to="/users" className="nav-link" >Users</Link>
                </li>
                <li className="nav-item mx-3"><Link to="/contactus" className="nav-link">
                Contact us</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
