import React, { useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import UserContext from './UserContext';
import logo from '../images/logo.png';
import './Home.css';

function Home(){

    /** Use history to redirect after user logs in/signs up */
    const history = useHistory();

    /** Global 'currentUser' from 'UserContext.Provider' */
    const { currentUser }= useContext(UserContext);

    /** Direct user to '/companies' page if logged in */
    if(currentUser){
        history.push('/companies');
    }

    return(
        <div className="Home d-flex align-items-center pt-5">
            <div className="Home-Content container align-self-center">
                <h1 className="Logo-Title">Dream Jobs <img src={logo} alt="Dream Jobs"/></h1>
                <p className="font-italic logo text-info">Find your dream job!</p>
                <Link to="/login" className="btn btn-info">Log In</Link>
            </div>
        </div>
    )
}

export default Home;