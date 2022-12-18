import classes from './Test.module.css';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

const Test = () => {
  const [showIconicMenu, setShowIconicMenu] = useState(false);

  const clickIconHandler = () => {
    setShowIconicMenu(!showIconicMenu);
  };

  const linkClickHandler = () => {
    setShowIconicMenu(false);
  };

  return (
    <div>
      <div className={classes.testbar}>
        <div>
          <div>
            <a href="/">
              <img
                className={classes.navbarLogo}
                srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-500.png 500w"
                alt="Company logo"
              />
            </a>
          </div>
        </div>
        <div>
          <nav className={classes.navMenu}>
            <div>
              <NavLink activeClassName={classes.active} to="/home">
                Home
              </NavLink>
            </div>
            <div>
              <NavLink activeClassName={classes.active} to="/featurepage">
                Features
              </NavLink>
            </div>
            <div>
              <NavLink activeClassName={classes.active} to="/aboutus">
                About us
              </NavLink>
            </div>
            <div>
              <NavLink activeClassName={classes.active} to="/contact">
                Contact us
              </NavLink>
            </div>
          </nav>
        </div>
        <div>
          <Link className={classes.navButton} to="/landingpage">
            USER LOGIN
          </Link>
          <div onClick={clickIconHandler}>
            <IoMenu className={classes.menuIcon} />
          </div>
        </div>
      </div>
      <div>
        {showIconicMenu ? (
          <div className={classes.iconicMenu}>
            <Link
              onClick={linkClickHandler}
              className={classes.iconicLinks}
              to="/home"
            >
              Home
            </Link>
            <div className={classes.iconicLinks + ' ' + classes.doubleLink}>
              <Link onClick={linkClickHandler} to="/featurepage">
                Features
              </Link>
              <Link onClick={linkClickHandler} to="/aboutus">
                About us
              </Link>
            </div>
            <Link
              onClick={linkClickHandler}
              className={classes.iconicLinks}
              to="/contact"
            >
              Contact us
            </Link>
            <Link className={classes.iconicLogin} to="/landingpage">
              USER LOGIN
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Test;
