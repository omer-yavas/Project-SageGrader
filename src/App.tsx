import { Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Features from './pages/Features';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Resources from './pages/Resources';
import Test from './components/Test';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Test />
          <Home />
          <Footer />
        </Route>
        <Route path="/featurepage">
          <Test />
          <Features />
          <Footer />
        </Route>
        <Route path="/aboutus">
          <Test /> <AboutUs />
          <Footer />
        </Route>
        <Route path="/contact">
          <Test /> <ContactUs />
          <Footer />
        </Route>
        <Route path="/privacy">
          <Test />
          <PrivacyPolicy />
          <Footer />
        </Route>
        <Route path="/resources">
          <Test />
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
