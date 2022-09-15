import React, {useState, useContext} from 'react';
import UserContext from './userContext';
import { useHistory } from 'react-router-dom';


const EditProfileForm = ({update}) => {
    const history = useHistory();
    const user = useContext(UserContext);
    if(Object.keys(user).length === 0) {
        return (
            <>
            {history.push('/')}
            </>
        )
    }
    const [formData, setFormData] = useState();
    const redirectToHome = () => history.push('/');
    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        update(formData);
        redirectToHome();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username: </label>
            <input type="text" name="username" id="username" value={user.username} onChange={handleChange}/>
            <label htmlFor='firstName'>First Name: </label>
            <input type='text' name='firstName' id='firstName' value={user.firstName} onChange={handleChange}/>
            <label htmlFor='lastName'>Last Name: </label>
            <input type='text' name='lastName' id='lastName' value={user.lastName} onChange={handleChange}/>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' id='email' value={user.email} onChange={handleChange}/>
            <label htmlFor='password'>Please enter your password to save changes.</label>
            <input type='password' name='password' id='password' onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default EditProfileForm;