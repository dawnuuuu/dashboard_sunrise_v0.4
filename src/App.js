import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SunriseDFDashboard from './pages/SunriseDFDashboard';
import DFSearchUI from './pages/DFSearchUI';
import UploadScenario from './pages/UploadScenario';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<SunriseDFDashboard />} />
          <Route path="/search" element={<DFSearchUI />} />
          <Route path="/upload" element={<UploadScenario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
