import { useEffect, useRef } from 'react';
import ClassComponent from './ClassComponent';
import InputRef from './InputRef';
import Ref from './Ref';

function Parent() {
  const inputRef = useRef();
  const pRef = useRef();
  const classRef = useRef();

  useEffect(() => {
    inputRef.current.value = 'from parent input';
    pRef.current.innerText = 'from parent p ref';
    console.log('inputref is', inputRef.current.name);
    console.log('classref is', classRef.current.aMethod());
  }, []);

  return (
    <>
      <InputRef inputRef={inputRef} />
      <Ref ref={pRef} callbackRef={(ref) => console.log('ref found', ref)} />
      <ClassComponent ref={classRef} />
    </>
  );
}

export default Parent;
