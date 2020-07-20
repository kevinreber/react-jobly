import React, {useState, useEffect} from 'react';
import JobList from './JobList';
import SearchBar from '../general/SearchBar';
import Api from '../../api/Api';

function Jobs(){
    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        /** Get all Jobs Data */
        const getData = async () => {
            const results = await Api.getJobs();
            setJobs(results);
        }
        getData();
    }, [])

    const handleSearch = async (search) => {
       const results = await Api.getJobs(search);
       setJobs(results);
    }

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

    /** Build a Card to display each Job */
    const JobsList = <JobList jobs={jobs} apply={apply} />;
    
    if (!jobs) {
        return <p>Loading...</p>
    }

    return(
        <>
            <SearchBar searchFor={handleSearch} />
            <div className="Jobs">
                <h1 className="text-info">Jobs</h1>
                {jobs.length === 0 ? <p>No jobs match search</p> :
                    <div className="JobsList container d-flex flex-wrap">
                        {JobsList}
                    </div>
                 }
            </div>
        </>
    )
}

export default Jobs;