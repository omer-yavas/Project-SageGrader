import { NavLink, Link } from 'react-router-dom';
import classes from './Navbar.module.css';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { useState } from 'react';

const Navbar = () => {
  const [showIconicMenu, setShowIconicMenu] = useState(false);

  const clickIconHandler = () => {
    setShowIconicMenu(!showIconicMenu);
  };

  const linkClickHandler = () => {
    setShowIconicMenu(false);
  };

  return (
    <div>
      <div className={classes.navbarBox}>
        <div>
          <a href="/">
            <img
              className={classes.navbarLogo}
              srcset="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-1600.png 1600w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-2000.png 2000w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9.png 2562w"
              src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9.png"
              loading="lazy"
              alt="Company logo"
            />
          </a>
        </div>

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

        <div>
          <Link className={classes.navButton} to="/landingpage">
            USER LOGIN
          </Link>
        </div>
        <div onClick={clickIconHandler}>
          <IonIcon className={classes.menuIcon} icon={menuOutline} />
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

export default Navbar;
