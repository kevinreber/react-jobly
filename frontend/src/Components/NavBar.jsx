import React, { useContext }  from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import UserContext from './UserContext';
import './NavBar.css';

function NavBar({ handleLogout }){

    /** Global 'currentUser' from 'UserContext.Provider' */
    const { currentUser } = useContext(UserContext);

    const LoggedInNav = (
        <>
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
            <NavLink className="nav-link" exact to="/" onClick={ handleLogout }>Log Out</NavLink>
        </li>
        </>
    );

    const LoggedOutNav = (
        <>
        <li className="nav-item ml-4">
            <NavLink className="nav-link" exact to="/login">Log In</NavLink>
        </li>
        </>
    );

    return(
        <nav className="NavBar navbar navbar-expand-md bg-info">
            <Link className="navbar-brand Logo-Title Logo-Title-Nav" exact to="/">Dream Jobs <img className="NavBar-Logo" src={logo} alt="Dream Jobs"/></Link>
            <ul className="navbar-nav ml-auto">               
                { currentUser ? LoggedInNav : LoggedOutNav }
            </ul>
        </nav>
    )
}

export default NavBar;