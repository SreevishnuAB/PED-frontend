import React from 'react';
import StudentsReport from './students-report';

export default function StudentsRootView(props){

  return (
    <StudentsReport profile={props.student.profile} peData={props.student.peData}/>
  );
}