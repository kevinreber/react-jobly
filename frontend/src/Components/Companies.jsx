import React, {useState, useEffect} from 'react';
import CompanyCard from './CompanyCard';
import SearchBar from './SearchBar';
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
        <>
            <SearchBar />
            <div className="Companies">
                <h1>Companies</h1>
                <div className="CompaniesList container d-flex flex-wrap">
                    {CompaniesList}
                </div>
            </div>
        </>
    )
}

export default Companies;