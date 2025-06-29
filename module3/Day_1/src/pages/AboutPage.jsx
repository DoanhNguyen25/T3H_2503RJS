import React from "react";
import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      AboutPage
      <button className="bg-blue-300 border-2s">
        <Link to={"me"}>Click to show detail</Link>
      </button>
      <Outlet />
    </div>
  );
};

export default AboutPage;
