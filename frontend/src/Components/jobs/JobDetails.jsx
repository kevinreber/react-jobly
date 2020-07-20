import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCard from './JobCard';
import Api from '../../api/Api';

function Job(){

    const [job, setJob] = useState({});
    const [company, setCompany] = useState('');
    const { id } = useParams();

    useEffect( () => {
        /** Get all Jobs Data */
        const getData = async () => {
            const results = await Api.getJob(id);
            setJob(results);
            setCompany(results.company.name);
        }
        getData();
    }, [])

    async function apply(id) {
        console.log('applying');
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