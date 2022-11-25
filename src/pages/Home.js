import HomeP1 from '../components/HomeP1';
import HomeP2 from '../components/HomeP2';
import HomeP3 from '../components/HomeP3';
import HomeP4 from '../components/HomeP4';
import HomeP5 from '../components/HomeP5';
import HomeP6 from '../components/HomeP6';
import HomeP7 from '../components/HomeP7';
import HomeP8 from '../components/HomeP8';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.homepagestyle}>
      <HomeP1></HomeP1>
      <HomeP2></HomeP2>
      <HomeP3></HomeP3>
      <HomeP4></HomeP4>
      <HomeP5></HomeP5>
      <HomeP6></HomeP6>
      <HomeP7></HomeP7>
      <HomeP8></HomeP8>
    </div>
  );
};

export default Home;
