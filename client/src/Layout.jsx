import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Layout = () => {
  const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensure at least viewport height
    background: "linear-gradient(90deg, rgba(9,46,121,1) 15%, rgba(0,183,255,1) 100%)",
  };

  const contentStyle = {
    flex: 1, // Allow content to take remaining space
    padding: "1rem", // Adjust the padding as needed
  };

  return (
    <div style={layoutStyle}>
      <Header />
      <div style={contentStyle}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
