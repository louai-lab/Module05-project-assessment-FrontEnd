import { Outlet } from "react-router-dom";
import Navbar from '../Layouts/Navbar/Navbar.js'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar/>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
