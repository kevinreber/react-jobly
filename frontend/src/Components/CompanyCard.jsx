import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyCard.css';

function CompanyCard({company}){
    const defaultLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWpMt1I4YD-NiUmlnM-PPrUL-6BR84_HTRBw&usqp=CAU';
    const companyLogo = company.logo_url ? company.logo_url : defaultLogo;
    return(
        <div id={company.handle} className="CompanyCard card w-75">
        <Link to={`/companies/${company.handle}`} >
            <img src={companyLogo} alt={company.name} className="card-img-top rounded-circle border border-dark" />
        </Link>
            <h1 className="card-title" >{company.name}</h1>
            <p className="card-text" >{company.description}</p>
        </div>
    )
}

export default CompanyCard;