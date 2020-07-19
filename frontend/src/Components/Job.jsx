import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCard from './JobCard';
import JoblyApi from '../JoblyApi';

function Job(){

    const [job, setJob] = useState({});
    const [company, setCompany] = useState('');
    const { id } = useParams();

    useEffect( () => {
        /** Get all Jobs Data */
        const getData = async () => {
            const results = await JoblyApi.getJob(id);
            setJob(results);
            setCompany(results.company.name);
        }
        getData();
    }, [])


    return(
        <>
            <div className="Job">
                <h1 className="text-info">{company}</h1>
                { job === {} ? <p>Loading...</p> :
                    <div className="Job container d-flex flex-wrap">
                        <JobCard job={job} />
                    </div>
                 }

            </div>
        </>
    )
}

export default Job;