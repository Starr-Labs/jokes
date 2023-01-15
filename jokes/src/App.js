import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import UserSubmission from './UserSubmission';

function App() {
  return (
      <div>
        <nav>
          <a href='/'>Home</a>
          <a href='/submit'>Submit a joke</a>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/submit' element={<UserSubmission /> } />
        </Routes>
      </div>
  );
}

export default App;
