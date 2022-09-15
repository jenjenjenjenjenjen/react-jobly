import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Throwaway from './Throwaway';
import CompanyList from './Company/CompanyList';
import CompanyDetail from './Company/CompanyDetail';
import JobList from './Jobs/JobList';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import Welcome from './Welcome';
import Logout from './Logout';
import EditProfileForm from './EditProfileForm';

const Routes = ({login, register, logout, isLoggedIn, update, apply}) => {
    return (
        <Switch>
            <Route exact path="/"><Welcome /></Route>
            <Route exact path="/companies"><CompanyList isLoggedIn={isLoggedIn} /></Route>
            <Route exact path="/companies/:handle"><CompanyDetail isLoggedIn={isLoggedIn}/></Route>
            <Route exact path="/jobs"><JobList isLoggedIn={isLoggedIn} apply={apply}/></Route>
            <Route exact path="/login"><LoginForm login={login}/></Route>
            <Route exact path="/signup"><RegistrationForm register={register}/></Route>
            <Route exact path="/profile"><EditProfileForm update={update}/></Route>
            <Route exact path="/logout"><Logout logout={logout}/></Route>
        </Switch>
    )
}

export default Routes;