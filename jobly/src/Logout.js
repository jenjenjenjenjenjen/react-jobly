import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = ({logout}) => {
    const history = useHistory();
    const redirectToHome = () => history.push("/");
    logout();
    redirectToHome();
    return null;
}

export default Logout;