import React, {useState, useEffect} from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from '../JoblyApi';

function Companies(){

    const [companies, setCompanies] = useState([]);

    useEffect( () => {
        const getData = async () => {
            const results = await JoblyApi.getCompanies();
            setCompanies(results);
        }
        getData();
    }, [])

    const CompaniesList = companies.map(company => (
        <CompanyCard company={company} />
    ))

    return(
        <div className="Companies">
            <h1>Companies</h1>
            <div className="CompaniesList container d-flex flex-wrap">
            {/* <div className="row row-cols-sm-1 d-inline"> */}
                {/* <div className="col"> */}
                {CompaniesList}
                {/* </div> */}
            {/* </div> */}
        </div>
        </div>

    )
}

export default Companies;