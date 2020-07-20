import React, {useState, useEffect} from 'react';
import CompanyCard from './CompanyCard';
import SearchBar from '../general/SearchBar';
import Api from '../../api/Api';

function Companies(){

    const [companies, setCompanies] = useState([]);

    useEffect( () => {
        
        /** Get all Companies Data */
        const getData = async () => {
            const results = await Api.getCompanies();
            setCompanies(results);
        }
        getData();
    }, [])

    /** On submit, passes values in SearchBar to API call. 
     *  On the backend we have filter query that will handle our search.
    */
    const handleSearch = async (search) => {
        const results = await Api.getCompanies(search);
        setCompanies(results);
    }

    /** Build a Card to display each Company */
    const CompaniesList = companies.map(company => (
        <CompanyCard company={company} />
    ))
    
    return(
        <>
            <SearchBar searchFor={handleSearch}/>
            <div className="Companies text-info">
                <h1 className="text-info">Companies</h1>
                {companies.length === 0 ? <p>No companies match search</p> :
                    <div className="CompaniesList container d-flex flex-wrap">
                        {CompaniesList}
                    </div>
                 }

            </div>
        </>
    )
}

export default Companies;