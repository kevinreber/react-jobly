import React from 'react';

function JobsCard({job}){

    return(
        <div id={job.id} className="JobCard ml-auto mr-auto mb-3 p-1 card w-75">
            <h3 className="card-title text-info">{job.title}</h3>
            <div className="card-body d-flex justify-content-between">
                <div className="JobCard-Pay text-secondary">
                    <p className="card-text mr-auto ml-3">Salary: {job.salary}</p>
                    <p className="card-text mr-auto ml-3">Equity: {job.equity}</p>
                </div>
                <div className="JobCard-Btn">
                    <button className="btn btn-outline-info">Apply</button>
                </div>
            </div>
        </div>
    )
}

export default JobsCard;