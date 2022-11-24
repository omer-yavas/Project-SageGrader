import { Route, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Features from './pages/Features';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Resources from './pages/Resources';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/featurepage">
          <Features />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
      </Switch>

      <Footer></Footer>
    </div>
  );
}

export default App;
