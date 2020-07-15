import React from 'react';

function JobCard({job}){
    
    return(
        <div id={job.id} className="JobCard ml-auto mr-auto mb-3 p-1 card w-75">
            <h3 className="card-title">{job.title}</h3>
            <div className="card-body d-flex justify-content-between">
                <div className="JobCard-Pay">
                    <p className="card-text mr-auto ml-3">Salary: {job.salary}</p>
                    <p className="card-text mr-auto ml-3">Equity: {job.equity}</p>
                </div>
                <div className="JobCard-Btn">
                    <button className="btn btn-danger">Apply</button>
                </div>
            </div>
        </div>
    )
}

export default JobCard;