import { useCallback, useState } from 'react';
import Child from './child';

function Parent() {
  const [count, setCount] = useState(0);
  const render = useCallback(() => <div>I am set in parent</div>, []);
  return (
    <>
      <Child render={render} />
      {count}
      <button type="button" onClick={() => setCount(count + 1)}>add</button>
    </>
  );
}

export default Parent;
