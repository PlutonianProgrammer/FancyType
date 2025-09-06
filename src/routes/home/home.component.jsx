import ButtonLink from "../../component/button-link/button-link.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className='home-container'>
      <div className='logo' />
      <h1>Welcome to FancyType</h1>
      <p>
        A Typing Practice Program with as Many Features Packed in as Possible.
      </p>

      <ButtonLink properties={{ text: "Play Now", link: "game" }} />
    </div>
  );
};

export default Home;
