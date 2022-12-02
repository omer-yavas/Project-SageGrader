import classes from './Footer.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <div className={classes.footerbox}>
      <div className={classes.footerupperpart}>
        <div>
          <img
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9.png"
            loading="lazy"
            width="225"
            srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-1600.png 1600w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9-p-2000.png 2000w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/6340f11a6a18b6834bb49612_Logo9.png 2562w"
            sizes="(max-width: 479px) 88vw, 225px"
            alt="Company logo"
          />
        </div>
        <div className={classes.footerupperright}>
          <div>
            <Link to="/home">Home Page</Link>
          </div>
          <div>
            <Link to="/featurepage">Features</Link>
          </div>
          <div>
            <Link to="/resources">Resources</Link>
          </div>
          <div>
            <Link to="/aboutus">About us</Link>
          </div>
          <div>
            <Link to="/contact">Contact us</Link>
          </div>
          <div>
            <Link to="privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className={classes.footermiddleline}></div>
      <div className={classes.footerdownpart}>
        Copyright © 2022 SageGrader | ABN 47 661 933 624 | Phone number: +614
        9708 6140<br></br>SageGrader is a Trademark of HPM Analytics Pty Ltd, a
        Melbourne-based educational technology company
      </div>
    </div>
  );
};

export default Footer;
