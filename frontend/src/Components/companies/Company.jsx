import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import JobList from '../jobs/JobList';
import Api from '../../api/Api';

function Company(){
    const [company, setCompany] = useState({});
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    /** Get handle */
    const { handle } = useParams();

    /** Get company and jobs data */
    useEffect(() =>{
        const getData = async () => {
            const results = await Api.getCompany(handle);
            setCompany(results);
            setJobs(results.jobs)
            setIsLoading(false);
        }
        getData();
    }, []);

    async function apply (id) {
        const message = await Api.applyToJob(id);
        /** add application status message to job state 
         *  message => "applied" if post request is successful
        */
        setJobs(jobs => 
            jobs.map(job => 
                job.id === id 
                    ? {...job, state: message}
                    : job
            )
        )
    }

    /** Build `jobList` when loading company data is finished */    
    let jobList = isLoading ? <h3>Loading...</h3> : <JobList jobs={jobs} apply={apply} />

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