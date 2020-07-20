import React from 'react';
import { Link } from 'react-router-dom';
import './style/JobsCard.css';

function JobCard({ id, title, salary, equity, appliedState, apply }){

    /** Apply */
    const handleApply = () => apply(id);

    return(
        <div id={id} className="JobCard ml-auto mr-auto mb-3 p-1 card w-75">
             <Link to={`/jobs/${id}`} >
            <h3 className="card-title text-info">{title}</h3>
            </Link>
            <div className="card-body d-flex justify-content-between">
                <div className="JobCard-Pay text-secondary">
                        <p className="card-text mr-auto ml-3">Salary: ${salary}</p>
                        <p className="card-text mr-auto ml-3">Equity: {equity * 100}%</p>
                </div>
                <div className="JobCard-Btn">
                    <button
                          id={id} 
                          className="btn btn-outline-info"
                          onClick={handleApply}
                         >
                          {appliedState ? 'Applied' : 'Apply'}
                    </button>
                </div> 
            </div>
        </div>
    )
}

export default JobCard;