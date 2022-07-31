import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TestContext from './constants';

function About() {
  const { name } = useContext(TestContext);
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, dont you
          think?
        </p>
        {name}
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
