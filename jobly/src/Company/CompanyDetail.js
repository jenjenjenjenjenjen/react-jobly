import React, {useState, useEffect} from 'react';
import { useParams, Redirect } from 'react-router-dom';
import JoblyApi from '../api';

const CompanyDetail = ({isLoggedIn}) => {
    if(!isLoggedIn) {
        return <Redirect to="/" />
    }
    const {handle} = useParams();
    const [company, setCompany] = useState(handle);
    useEffect(function fetchCompanyWhenMounted() {
        async function fetchCompany() {
            const data = await JoblyApi.getCompany(handle);
            setCompany(data);
        }
        fetchCompany();
    }, [])

    return (
        <div>
            <h1>{company.name}</h1>
            <h3>{company.description}</h3>
        </div>
    )
}

export default CompanyDetail;