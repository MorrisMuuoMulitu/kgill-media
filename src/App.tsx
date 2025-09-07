import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { AccessibilityProvider } from './providers/AccessibilityProvider';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AccessibilityMenu from './components/AccessibilityMenu';
import SkipLink from './components/SkipLink';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import OurLeaders from './pages/OurLeaders';
import WhatWeDo from './pages/WhatWeDo';
import TheMovement from './pages/TheMovement';
import TheFeed from './pages/TheFeed';
import GetInvolved from './pages/GetInvolved';
import KGTVPg from './pages/KGTVPg';
import PhotographyVideographyPg from './pages/PhotographyVideographyPg';
import WorkshopsPg from './pages/WorkshopsPg';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';
import SocialProofTicker from './components/SocialProofTicker';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <AccessibilityProvider>
        <PerformanceOptimizer>
          <Router>
            <div className="min-h-screen bg-charcoal text-white">
              <SkipLink />
              <CustomCursor />
              <Navigation />
              <main id="main-content" role="main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/our-story" element={<OurStory />} />
                  <Route path="/our-leaders" element={<OurLeaders />} />
                  <Route path="/what-we-do" element={<WhatWeDo />} />
                  <Route path="/the-movement" element={<TheMovement />} />
                  <Route path="/the-feed" element={<TheFeed />} />
                  <Route path="/get-involved" element={<GetInvolved />} />
                  <Route path="/kgill-tv" element={<KGTVPg />} />
                  <Route path="/photography-videography" element={<PhotographyVideographyPg />} />
                  <Route path="/workshops" element={<WorkshopsPg />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:id" element={<BlogPostDetail />} />
                </Routes>
              </main>
              <SocialProofTicker />
              <Footer />
              <AccessibilityMenu />
            </div>
          </Router>
        </PerformanceOptimizer>
      </AccessibilityProvider>
    </ThemeProvider>
  );
}

export default App;