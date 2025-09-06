import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className='nav-bar-body'>
        <h1>NAV-BAR</h1>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
