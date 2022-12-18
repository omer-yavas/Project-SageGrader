import classes from './Contactus.module.css';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className={classes.contactbox}>
      <h2>Get in touch with us</h2>
      <p>info@sagegrader.com</p>
    </div>
  );
};

export default ContactUs;
