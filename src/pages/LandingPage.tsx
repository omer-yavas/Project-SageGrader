import classes from './LandingPage.module.css';
import React from 'react';
const LandingPage = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Try again later!');
  };
  return (
    <div className={classes.landingbox}>
      <h1>SageGrader</h1>
      <form className={classes.formstyle} onSubmit={submitHandler}>
        <label htmlFor="email">Your E-mail</label>
        <input type="email" id="email" size={50}></input>
        <br></br>
        <label htmlFor="password">Your Password</label>
        <input type="password" id="password"></input>
        <br></br>
        <button className={classes.formbutton}>Log in</button>
      </form>
      <a href="/landingpage">Forgot password</a>
      <span>
        Don't have an account? <a href="/landingpage">Sign Up</a>
      </span>
    </div>
  );
};

export default LandingPage;
