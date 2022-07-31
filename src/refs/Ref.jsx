/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Ref = React.forwardRef((props, ref) => (
  <>
    <div>I am Ref</div>
    <p ref={ref} />
    <p ref={props.callbackRef}>callback ref</p>
  </>
));

export default Ref;
