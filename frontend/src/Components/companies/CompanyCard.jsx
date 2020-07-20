import React from 'react';
import { Link } from 'react-router-dom';
import defaultLogo from '../../images/default-logo.png';
import './style/CompanyCard.css';

function CompanyCard({company}){

    const companyLogo = company.logo_url ? company.logo_url : defaultLogo;
    return(
        <div id={company.handle} className="CompanyCard card w-75 mr-auto ml-auto mb-3">
        <Link to={`/companies/${company.handle}`} >
        <div id={company.handle} className="d-inline-flex justify-content-between p-3">
            <div className="CompanyCard-Avatar mr-auto ml-auto">
            <img src={companyLogo} alt={company.name} className="card-img-top rounded-circle border border-dark" />
            </div>
            <div className="card-text ml-auto text-left w-75">
                <h5 className="card-title text-info">{company.name}</h5>
                <i class="far fa-building"></i>
                <p className="card-text text-secondary">{company.description}</p>
            </div>
        </div>
        </Link>
        </div>
    )
}

export default CompanyCard;