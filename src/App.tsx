import React from 'react';
import PageTransition from './components/PageTransition';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { AccessibilityProvider } from './providers/AccessibilityProvider';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import AccessibilityMenu from './components/AccessibilityMenu';
import SkipLink from './components/SkipLink';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import OurLeaders from './pages/OurLeaders';
import WhatWeDo from './pages/WhatWeDo';

import KGTVPg from './pages/KGTVPg';
import PhotographyVideographyPg from './pages/PhotographyVideographyPg';
import SocialProofTicker from './components/SocialProofTicker';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import KGTVManager from './pages/admin/KGTVManager';
import PortfolioManager from './pages/admin/PortfolioManager';
import ServicesManager from './pages/admin/ServicesManager';
import CaseStudiesManager from './pages/admin/CaseStudiesManager';
import MessagesManager from './pages/admin/MessagesManager';

import './index.css';

function AppContent() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <div className={`min-h-screen bg-charcoal text-white ${isAdminPath ? 'admin-theme' : ''}`}>
      {!isAdminPath && (
        <>
          <SkipLink />
          <CustomCursor />
          <Navigation />
          <ScrollToTop />
        </>
      )}
      <main id="main-content" role="main">
        <PageTransition>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-leaders" element={<OurLeaders />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/kgill-tv" element={<KGTVPg />} />
            <Route path="/photography-videography" element={<PhotographyVideographyPg />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="kgtv" element={<KGTVManager />} />
                <Route path="portfolio" element={<PortfolioManager />} />
                <Route path="services" element={<ServicesManager />} />
                <Route path="case-studies" element={<CaseStudiesManager />} />
                <Route path="messages" element={<MessagesManager />} />
              </Route>
            </Route>
          </Routes>
        </PageTransition>
      </main>
      {!isAdminPath && (
        <>
          <SocialProofTicker />
          <Footer />
          <AccessibilityMenu />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AccessibilityProvider>
        <PerformanceOptimizer>
          <Router>
            <AppContent />
          </Router>
        </PerformanceOptimizer>
      </AccessibilityProvider>
    </ThemeProvider>
  );
}

export default App;