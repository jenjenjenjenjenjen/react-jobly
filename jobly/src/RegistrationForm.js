import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const RegistrationForm = ({register}) => {
    const [formData, setFormData] = useState();
    const history = useHistory();
    const redirectToHome = () => history.push("/companies");
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        register(formData);
        redirectToHome();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='username' id='username' placeholder='Username...' onChange={handleChange}/>
            <input type='password' name='password' id='password' placeholder='Password...' onChange={handleChange}/>
            <input type='text' name='firstName' id='firstName' placeholder='First name...' onChange={handleChange}/>
            <input type='text' name='lastName' id='lastName' placeholder='Last name...' onChange={handleChange}/>
            <input type='text' name='email' id='email' placeholder='Email...' onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default RegistrationForm;