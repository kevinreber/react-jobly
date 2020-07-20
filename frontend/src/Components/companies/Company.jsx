import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import JobList from '../jobs/JobList';
import UserContext from '../UserContext';
import Api from '../../api/Api';

function Company(){

    /** Global 'currentUser' from 'UserContext.Provider' */
    const { currentUser } = useContext(UserContext);

    const [company, setCompany] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    /** Get handle */
    const { handle } = useParams();

    /** Get company and jobs data */
    useEffect(() =>{
        const getData = async () => {
             // Jobs => Array of job ids that user applied to 
            const { jobs } = currentUser;
            const jobsApplied = jobs.map(job => job.id);

            const results = await Api.getCompany(handle);
            /** Compare Company's jobs to jobs applied for job application status */
            results.jobs = handleJobStatus(results.jobs, jobsApplied);

            setCompany(results);
            setIsLoading(false);
        }

        /** Returns an array of jobs and their application status */
        const handleJobStatus = (jobs, applied) => {
            let jobsApplied = jobs.map(job => ({
                ...job, 
                state: applied.includes(job.id) ? 'applied' : null
            }));
            return jobsApplied;
        }

        getData();
    }, []);

    async function apply (id) {
        const message = await Api.applyToJob(id);
        /** add application status message to job state 
         *  message => "applied" if post request is successful
        */
        setCompany(company => ({ 
            ...company,
            jobs: company.jobs.map(job => 
                job.id === id 
                    ? {...job, state: message}
                    : job
            )
        }))
    }

    /** Build `jobList` when loading company data is finished */    
    let jobList = isLoading ? <h3>Loading...</h3> : <JobList jobs={company.jobs} apply={apply} />

    return(
        <div className="Company">
            <h1 className="Company-Title p-3 text-info">{company.name}</h1>
            <div className="JobList container d-flex flex-wrap">
                {jobList}
            </div>
        </div>
    )
}

export default Company;