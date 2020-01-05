import React, { useState } from 'react';
import StudentsReport from './students-report';

export default function StudentsRootView(props){


  return (
    <StudentsReport colorCH={props.peData.colorCH}/>
  );
}