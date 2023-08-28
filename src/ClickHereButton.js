import React from 'react';

const ClickHereButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="click-button">
      Click Here
    </button>
  );
};

export default ClickHereButton;
