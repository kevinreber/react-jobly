import React, {useState, useEffect} from 'react';
import JobsCard from './JobsCard';
import SearchBar from './SearchBar';
import JoblyApi from '../JoblyApi';

function Jobs(){
    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        /** Get all Jobs Data */
        const getData = async () => {
            const results = await JoblyApi.getJobs();
            setJobs(results);
        }
        getData();
    }, [])

    const handleSearch = async (search) =>{
       const results = await JoblyApi.getJobs(search);
       setJobs(results);
    }

    /** Build a Card to display each Job */
    const JobsList = jobs.map(job => (
        <JobsCard job={job} />
    ))
    
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