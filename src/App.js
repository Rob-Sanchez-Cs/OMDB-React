import './App.css';
import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MediaPage from './components/MediaPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:imdbID" element={<MediaPage />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
