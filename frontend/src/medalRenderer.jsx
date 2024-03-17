import React from 'react';

export default (props) => {
  const total = props.data.dataname;

  return (
    <span className="Button1">
      <button onClick={() => alert(`${total} medals won!`)}>
        Button1
      </button>
    </span>
  );
};