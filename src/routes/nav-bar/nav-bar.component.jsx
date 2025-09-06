import { Outlet } from "react-router-dom";

import ButtonLink from "../../component/button-link/button-link.component";

import "./nav-bar.styles.scss";

const NavBar = () => {
  return (
    <>
      <div className='nav-bar-body'></div>
      <Outlet />
    </>
  );
};

export default NavBar;
