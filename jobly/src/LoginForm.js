import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = ({login}) => {
    const [formData, setFormData] = useState();
    const history = useHistory();
    let redirectToHome = () => history.push("/companies");
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        login(formData);
        redirectToHome();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" id="username" placeholder='Username...' onChange={handleChange}/>
            <input type="password" name="password" id="password" placeholder='Password...' onChange={handleChange}/>
            <button type='submit' >Submit</button>
        </form>
    )
}

export default LoginForm;