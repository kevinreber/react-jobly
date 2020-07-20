import React from 'react';
import JobCard from './JobCard';
    
function JobList({ jobs, apply }){
    /** Build a Card to display each Job */
    const JobsList = jobs.map(job => (
        <JobCard 
             id={job.id}
             title={job.title} 
             salary={job.salary}
             equity={job.equity}
             appliedState={job.state}
             apply={apply} 
        />
    ))

    return (
            <>
                {JobsList}
            </>
    )
}

export default JobList;