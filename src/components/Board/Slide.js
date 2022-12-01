import React from "react";

function Slide(props) {

  const isEmpty = props.value === 'empty';

  return (
    <div
      onClick={(e) => props.moveSlideHandler(props.id)}
      className={isEmpty ? 'empty' : 'block'}
    >
      { isEmpty ? '' : props.value}
    </div>
  );
}

export default Slide;