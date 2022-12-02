import classes from './HomeP3.module.css';
import React from 'react';
const HomeP3 = () => {
  return (
    <div className={classes.p3box}>
      <div className={classes.featuresBlock}>
        <p className={classes.featuresTitle}>
          <strong>91%</strong>
        </p>
        <p>Marking error reduced</p>
      </div>
      <div className={classes.featuresBlock}>
        <p className={classes.featuresTitle}>
          <strong>7×</strong>
        </p>
        <p>More feedback generated</p>
      </div>
      <div className={classes.featuresBlock}>
        <p className={classes.featuresTitle}>
          <strong>90%+</strong>
        </p>
        <p>Student satisfaction</p>
      </div>
    </div>
  );
};

export default HomeP3;
