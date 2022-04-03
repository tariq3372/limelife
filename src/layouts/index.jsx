import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const index = () => {
  return (
    <div style={{ minHeight: "100%", padding: "33px 74px 34px 74px" }}>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default index;