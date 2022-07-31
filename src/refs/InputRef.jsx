import { useImperativeHandle } from 'react';

// eslint-disable-next-line react/prop-types
function InputRef({ inputRef }) {
  useImperativeHandle(inputRef, () => ({
    name: 'sanjay',
  }));
  return (
    <>
      <div>I am child</div>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default InputRef;
