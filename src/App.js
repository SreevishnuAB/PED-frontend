import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './Components/login';
import StudentsRootView from './Components/students-root-view';
import './App.css'
import NavBar from './Components/navbar';
import Fade from '@material-ui/core/Fade';
import ToastNotification from './Components/toast';
import Axios from './axios/config';

function App() {

  const history = useHistory();
  const [user, setUser] = useState({authenticated: false, id:'', designation: undefined});
  const [toastMessage, setToastMessage] = useState({error: false, messageText: ''});
  const [open, setOpen] = useState(false);


  // const handlePath = (path)=>{
  //   setUrl(path);
  // }

  const handleUserAuth = React.useCallback((authData)=>{
    setUser(authData);
    console.log(authData);
  }, []);

  const handleProfileChange = (newField)=>{
    let updatedUser = user;
    updatedUser.profile[newField.field.toLowerCase()] = newField.value;
    setUser(updatedUser);
  }

  const handleLogout = ()=>{

    Axios.get(
      '/logout'
    ).then((response)=>{
      setToastMessage({error: false, messageText: response.data})
      setUser({authenticated: false, id:"", designation: undefined});
      history.push("/");
      setOpen(true);
    }).catch((error)=>{
      setToastMessage({error: true, messageText: error.response.data});
      setOpen(true);
    });

  }

  return(
    <>
      <NavBar
        authenticated={user.authenticated}
        username={user.id.toUpperCase()}
        onLogout={handleLogout}
        />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps)=>(
            <Login
              {...routerProps}
              onLogin={handleUserAuth}
              user={user}
            />
          )}
        />
        <Route
          path="/student"
          render={(routerProps)=>(
            <StudentsRootView
              {...routerProps}
              student={user}
              onProfileChange={handleProfileChange}
              onLogout={handleLogout}
            />
          )}
        />
      </Switch>
      <ToastNotification open={open} onClose={()=>{setOpen(false)}} message={toastMessage}/>
    </>
  );
}

export default App;
