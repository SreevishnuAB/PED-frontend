import React from 'react';
import { Switch , Route, useRouteMatch } from 'react-router-dom';
import StudentsReport from './students-report';
import Profile from './profile';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function StudentsRootView(props){

  // switch(props.view){
  //   case "report":
  //     return <StudentsReport profile={props.student.profile} pedData={props.student.pedData}/>
  //   case "profile":
  //     return <Profile profile={props.student.profile} onProfileChange={props.onProfileChange}/>;
  //   default:
  //     return <div>TODO Error page</div>
  // }

  let match = useRouteMatch();

  console.log(match.path)
  return(
    <TransitionGroup>
      <CSSTransition
        key={1}
        classNames="fade"
        timeout={300}
      >
        <Switch>
          <Route
            exact
            path={`${match.path}/:studentId`}
            render={(routerProps)=>(
                <StudentsReport
                  profile={props.student.profile}
                  pedData={props.student.pedData}
                  {...routerProps}
                  {...props}
                />
            )}
          />
          <Route
            path={`${match.path}/:studentId/profile`}
            render={(routerProps)=>(
                <Profile
                  profile={props.student.profile}
                  {...routerProps}
                  {...props}
                />
            )}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}