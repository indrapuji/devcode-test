import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Headers from './components/Headers';
import HomeScreen from './pages/HomeScreen';
import DetailScreen from './pages/DetailScreen';

function router() {
  return (
    <Router>
      <div>
        <Headers />
        <Routes>
          <Route exact path='/' element={<HomeScreen />} />
          <Route exact path='/detail/:detailId' element={<DetailScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default router;
