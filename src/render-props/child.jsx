import React from 'react';

/* eslint-disable react/prop-types */
function Child({ render }) {
  console.log('child rendered');
  return (
    <>
      {render()}
    </>
  );
}

export default React.memo(Child);
