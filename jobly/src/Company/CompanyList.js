import React, { useEffect, useState, useContext } from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import JoblyApi from '../api';
import CompanyCard from './CompanyCard';
import UserContext from '../userContext';


const CompanyList = () => {
    const history = useHistory();
    const user = useContext(UserContext);
    if(Object.keys(user).length === 0) {
        return (
            <>
            {history.push('/')}
            </>
        )
    }
    const [companies, setCompanies] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(function fetchCompaniesWhenMounted() {
        async function fetchCompanies(search) {
            const data = await JoblyApi.getAllCompanies();
            setCompanies(data);
        }
        fetchCompanies();
    }, [])
    const handleChange = evt => {
        const {name, value} = evt.target;
        setSearch(value);
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const filteredComps = await JoblyApi.getAllCompanies(search);
        setCompanies(filteredComps);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" id="name" type="text" placeholder='Enter search term...' onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <div>
                {console.log(companies)}
                {companies.map(company => {
                    return (
                        <Link to={`/companies/${company.handle}`}>
                        <CompanyCard company={company} key={company.handle} />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CompanyList;