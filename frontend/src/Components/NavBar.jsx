import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-md bg-light">
            <Link className="navbar-brand" exact to="/">Jobly</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item ml-4">
                    <NavLink className="nav-link" exact to="/companies">Companies</NavLink>
                </li>
                <li className="nav-item ml-4">
                    <NavLink className="nav-link" exact to="/jobs">Jobs</NavLink>
                </li>
                <li className="nav-item ml-4">
                    <NavLink className="nav-link" exact to="/profile">Profile</NavLink>
                </li>
                <li className="nav-item ml-4">
                    <NavLink className="nav-link" exact to="/">Log Out</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;