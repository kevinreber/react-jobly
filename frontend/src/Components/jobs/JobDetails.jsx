import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import JobCard from './JobCard';
import UserContext from '../UserContext';
import Api from '../../api/Api';

function Job(){

    /** Global 'currentUser' from 'UserContext.Provider' */
    const { currentUser } = useContext(UserContext);

    const [job, setJob] = useState({});
    const [company, setCompany] = useState('');
    const { id } = useParams();

    useEffect( () => {
        /** Get all Jobs Data */
        const getData = async () => {
            // Jobs => Array of job ids that user applied to 
            const { jobs } = currentUser;
            const jobsApplied = jobs.map(job => job.id);

            const results = await Api.getJob(id);
            
            // Check if Job has already been applied to
            if (jobsApplied.includes(results.id)){
                results.state = 'applied';
            }

            setJob(results);
            setCompany(results.company.name);
        }
        getData();
    }, [])

    async function apply(id) {
        const message = await Api.applyToJob(id);
        // message => "applied" if post request is successful
        setJob(job =>
          job.id === id ? {...job, state: message} : job
        )
    }

    return(
        <>
            <div className="Job">
                <h1 className="text-info">{company}</h1>
                { job === {} ? <p>Loading...</p> :
                    <div className="Job container d-flex flex-wrap">
                    <JobCard 
                        id={job.id}
                        title={job.title} 
                        salary={job.salary}
                        equity={job.equity}
                        appliedState={job.state}
                        apply={apply} 
                    />
                    </div>
                 }

            </div>
        </>
    )
}

export default Job;