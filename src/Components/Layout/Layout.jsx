import React from "react";
import Navbar from "../NavBar/Navbar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
