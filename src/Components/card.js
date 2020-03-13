import React from 'react';

const style = {
  maxWidth: '210px',
  maxHeight: '210px',
  minHeight: '100px',
  minWidth: '100px',
  padding: '10px',
  borderRadius: '3px'
}

const CardCustom = (props)=>{
  return(
    <div className={props.className} style={style}>
      {props.children}
    </div>
  );
}

export default CardCustom;