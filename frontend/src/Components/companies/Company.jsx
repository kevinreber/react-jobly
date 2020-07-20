import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import JobsCard from '../jobs/JobsCard';
import Api from '../../api/Api';

function Company(){
    const [company, setCompany] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    /** Will store `jobList` of company's jobs */
    let jobList;

    /** Get handle */
    const { handle } = useParams();

    /** Get company data */
    useEffect(() =>{
        const getData = async () => {
            const results = await Api.getCompany(handle);
            setCompany(results);
            setIsLoading(false);
        }
        getData();
    }, []);

    if (isLoading) {
        return <h3>Loading...</h3>;
    }

    /** Build `jobList` when loading company data is finished */
    if(!isLoading){
        jobList = company.jobs.map(job => (
            <JobsCard job={job} />
        ));
    }

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