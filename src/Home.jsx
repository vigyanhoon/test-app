import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TestContext from './constants';

function Home() {
  const { setName } = useContext(TestContext);

  useEffect(() => {
    setName('sanjay');
  }, []);

  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <br />
        <Link to="/landing">Error</Link>
        <br />
        <Link to="/refs">Refs</Link>
        <br />
        <Link to="/renderprops">Render props</Link>
      </nav>
    </>
  );
}

export default Home;
