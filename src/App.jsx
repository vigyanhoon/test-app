/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import TestContext from './constants';
import Landing from './error/landing';
import Parent from './refs/Parent';
// eslint-disable-next-line import/no-named-default
import { default as RenderParent } from './render-props/parent';

function App() {
  const [name, setName] = useState();

  return (
    <TestContext.Provider value={{ name, setName }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="landing" element={<Landing />} />
          <Route path="refs" element={<Parent />} />
          <Route path="renderprops" element={<RenderParent />} />
        </Routes>
      </div>
    </TestContext.Provider>

  );
}

export default App;
