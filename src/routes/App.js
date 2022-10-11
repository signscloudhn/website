import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import "../styles/global/global.scss"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export { App };