import React from 'react';
import classes from './HomeP1.module.css';
import { Link } from 'react-router-dom';
const HomeP1 = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div>
          <h1 className={classes.heading}>
            Designed by Educators for Educators
          </h1>
          <p className={classes.mainP}>
            Powered by state-of-the-art Artificial Intelligence (AI), SageGrader
            is an automatic grading and management platform with support for
            multiple choice, short text, essay, numerical, and programming type
            questions that produces timely, rich, detailed, and individualised
            feedback for each student.<br></br>
            <br></br> SageGrader is a secure, cloud-based platform that allows
            for parallel auto-grading of assessments for significant time and
            cost savings in auto-marking tasks.
          </p>
          <div className={classes.buttonPrimary}>
            <Link to="/contact">CONTACT US</Link>
          </div>
        </div>
        <div>
          <img
            className={classes.imagestyle}
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634149ee86548a69d8560bc1_Home-Final.png"
            loading="lazy"
            srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634149ee86548a69d8560bc1_Home-Final-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634149ee86548a69d8560bc1_Home-Final-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634149ee86548a69d8560bc1_Home-Final-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634149ee86548a69d8560bc1_Home-Final-p-1600.png 1600w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634149ee86548a69d8560bc1_Home-Final-p-2000.png 2000w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634149ee86548a69d8560bc1_Home-Final-p-2600.png 2600w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/634149ee86548a69d8560bc1_Home-Final.png 2809w"
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default HomeP1;
