import React from 'react';

function Button({ text, buttonAction}:any) {
  // reusable button  component  with props ;
    return (
      <React.Fragment>
        <button onClick={buttonAction}>{text}</button>
      </React.Fragment>
    )
}

export default Button
