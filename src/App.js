import { Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs.tsx';
import ContactUs from './pages/ContactUs.tsx';
import Features from './pages/Features.tsx';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import Resources from './pages/Resources.tsx';
import React from 'react';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route path="/featurepage">
          <Navbar />
          <Features />
          <Footer />
        </Route>
        <Route path="/aboutus">
          <Navbar /> <AboutUs />
          <Footer />
        </Route>
        <Route path="/contact">
          <Navbar /> <ContactUs />
          <Footer />
        </Route>
        <Route path="/privacy">
          <Navbar />
          <PrivacyPolicy />
          <Footer />
        </Route>
        <Route path="/resources">
          <Navbar />
          <Resources />
          <Footer />
        </Route>
        <Route path="/landingpage">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
