import React, {useState, useEffect} from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import UserContext from './userContext';
import './App.css';
import Routes from './Routes';
import Nav from './Nav';
import JoblyApi from './api';
import useLocalStorage from './useLocalStorage';

function App() {
  const [token, setToken] = useLocalStorage("token", '')
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);
  const [currUser, setCurrUser] = useState({});
  const history = useHistory();
  const login = async ({username, password}) => {
    const token = await JoblyApi.getToken(username, password);
    if (token) {
      setCurrUser({username, password});
      setToken(token);
      setIsLoggedIn(true);
      console.log(isLoggedIn, "AHHHHHH")
    }
  }
  const register = async ({username, password, firstName, lastName, email}) => {
    const token = await JoblyApi.register(username, password, firstName, lastName, email);
    if (token){
      setCurrUser({username, password, firstName, lastName, email});
      setToken(token);
      setIsLoggedIn(true);
    }
  }
  const update = async ({username, password, firstName, lastName, email}) => {
    const user = await JoblyApi.updateUser(username, password, firstName, lastName, email);
    if (user) {
      setCurrUser({username, password, firstName, lastName, email});
    }
  }
  const logout = () => {
    localStorage.removeItem("token");
    setCurrUser({});
    setToken({});
    setIsLoggedIn(false);
  }
  const apply = async (username, jobId) => {
    const application = await JoblyApi.apply(username, jobId);
  }
  const checkLocalStorage = () => {
    if(isLoggedIn === 'true') {
      history.push('/companies');
    }
  }
  useEffect(function fetchUserInfo() {
    async function fetchUser(username) {
      const userResult = await JoblyApi.fetchUserInfo(username);
      setCurrUser(userResult)
    }
    fetchUser(currUser.username);
  }, [token])

  return (
    <div className="App" onLoad={checkLocalStorage}>
      <UserContext.Provider value={currUser}>
      <BrowserRouter>
        <Nav token={token}/>
        <Routes login={login} register={register} logout={logout} isLoggedIn={isLoggedIn} update={update} apply={apply}/>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
