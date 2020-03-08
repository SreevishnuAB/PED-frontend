import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './Components/login';
import StudentsRootView from './Components/students-root-view';
import './App.css'
import NavBar from './Components/navbar';
import Fade from '@material-ui/core/Fade';
import ToastNotification from './Components/toast';
import axiosPreset from './axios/config';

function App() {

  const history = useHistory();
  const [user, setUser] = useState({authenticated: false, id:'', designation: undefined});
  const [url, setUrl] = useState('/');
  const [toastMessage, setToastMessage] = useState({error: false, messageText: ''});
  const [open, setOpen] = useState(false);

  const changeView = ()=>{
//    setView(newView);
    console.log(url);
    history.push(`${url}/profile`)
    
  }

  const handlePath = (path)=>{
    setUrl(path);
  }

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

    axiosPreset.get(
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
      <Fade timeout={150}>
        <NavBar
          authenticated={user.authenticated}
          username={user.id.toUpperCase()}
          onProfileClick={changeView}
          onLogout={handleLogout}
          />
       </Fade> 
       <Fade timeout={150}>
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
                onNav={handlePath}
                onProfileChange={handleProfileChange}
                onMenuClick={changeView}
                onLogout={handleLogout}
              />
            )}
          />
        </Switch>
      </Fade>
      <ToastNotification open={open} onClose={()=>{setOpen(false)}} message={toastMessage}/>
    </>
  );
}

export default App;
