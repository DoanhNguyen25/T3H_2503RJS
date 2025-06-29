import React from "react";

const Header = ({ title = "aaa" }) => {
  // console.log("Props values", title);
  return <div>{title}</div>;
};

export default Header;
