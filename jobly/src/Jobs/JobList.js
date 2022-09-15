import React, {useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from '../api';
import JobCard from './JobCard';

const JobList = ({isLoggedIn, apply}) => {
    if(!isLoggedIn) {
        return <Redirect to="/" />
    }
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(function fetchJobsWhenMounted() {
        async function fetchJobs() {
            const data = await JoblyApi.getAllJobs();
            setJobs(data);
        }
        fetchJobs();
    }, [])
    const handleChange = evt => {
        const {name, value} = evt.target;
        setSearch(value);
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const filteredJobs = await JoblyApi.getAllJobs(search);
        setJobs(filteredJobs);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" id="title" type="text" placeholder='Enter search term...' onChange={handleChange}/>
                <button type="submit">Submit</button>
            </form>
            <div>
                {console.log(jobs)}
                {jobs.map(job => {
                    return (
                        <JobCard job={job} key={job.id} apply={apply}/>
                    )
                })}
            </div>
        </div>
    )
}

export default JobList;