import { Fragment } from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.navbarBox}>
      <div>
        <img
          sizes="(max-width: 479px) 63vw, (max-width: 767px) 300px, (max-width: 991px) 39vw, (max-width: 1439px) 30vw, 300px"
          width="300"
          srcset="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-1600.png 1600w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-2000.png 2000w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9.png 2562w"
          src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9.png"
          loading="lazy"
          alt="Company logo"
        />
      </div>
      <div>
        <nav>
          <div>Home</div>
          <div>Features</div>
          <div>About us</div>
          <div>Contact us</div>
        </nav>
      </div>
      <div>
        <button className={classes.navButton}>USER LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
