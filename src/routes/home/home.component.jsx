import { Link } from "react-router-dom";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className='home-container'>
      <div className='logo' />
      <h1>Welcome to FancyType</h1>
      <p>
        A Typing Practice Program with as Many Features Packed in as Possible.
      </p>
      <div className='link-container'>
        <Link to='game'>Type Now</Link>
      </div>
    </div>
  );
};

export default Home;
