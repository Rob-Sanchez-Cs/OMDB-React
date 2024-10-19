import './App.css';
import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MediaPage from './components/MediaPage';
import Search from './components/Search';
import Home from './components/Home';


function App() {

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/:imdbID" element={<MediaPage />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
