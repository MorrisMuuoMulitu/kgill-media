import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import OurLeaders from './pages/OurLeaders';
import WhatWeDo from './pages/WhatWeDo';
import TheMovement from './pages/TheMovement';
import TheFeed from './pages/TheFeed';
import GetInvolved from './pages/GetInvolved';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-charcoal text-white">
          <CustomCursor />
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-leaders" element={<OurLeaders />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/the-movement" element={<TheMovement />} />
            <Route path="/the-feed" element={<TheFeed />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;