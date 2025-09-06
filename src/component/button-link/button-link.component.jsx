import { Link } from "react-router-dom";

import "./button-link.styles.scss";

const ButtonLink = ({ properties }) => {
  return (
    <div className='button-link-container'>
      <Link to={properties.link}>{properties.text}</Link>
    </div>
  );
};

export default ButtonLink;
