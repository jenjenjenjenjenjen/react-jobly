import React, {useContext} from 'react';
import UserContext from './userContext';
import { Link } from 'react-router-dom';

const Welcome = () => {
    const user = useContext(UserContext);
    if(Object.keys(user).length === 0) {
        return (
            <>
            <h1>Welcome to Jobly!</h1>
            <h4>Please log in or sign up to get started.</h4>
            <Link to="/login"><button>Log In</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
            </>
        )
    } else {
        return (
            <>
                <h1>Weclome back {user.firstName}!</h1>
            </>
        )
    }
}

export default Welcome;