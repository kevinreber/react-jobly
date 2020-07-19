import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.png';
import './Home.css';

function Home(){
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