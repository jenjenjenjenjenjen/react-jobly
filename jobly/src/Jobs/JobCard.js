import React, {useContext} from 'react';
import UserContext from '../userContext';


const JobCard = ({job, apply}) => {
    const user = useContext(UserContext);
    const applyForJob = () => {
        apply(user.username, job.id)
    }
    return (
        <div>
            <h2>{job.title}</h2>
            <h4>{job.companyName}</h4>
            <p>Salary: {job.salary}</p>
            {job.equity ? <p>Equity: {job.equity}</p> : null}
            <button onClick={applyForJob}>Apply</button>
        </div>
    )
}

export default JobCard;