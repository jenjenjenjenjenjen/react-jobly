import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from './userContext';

const Nav = () => {
    const user = useContext(UserContext);
    if(Object.keys(user).length === 0) {
        return (
            <ul>
                <li><Link to="/">Jobly</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        )
    } else {
        return(
            <ul>
                <li><Link to="/">Jobly</Link></li>
                <li><Link to="/companies">Companies</Link></li>
                <li><Link to="/jobs">Jobs</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">Log Out</Link></li>
            </ul>
        )
    }
}

export default Nav;
