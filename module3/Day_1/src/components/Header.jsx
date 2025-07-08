import React from "react";
import { useTheme } from "../hooks/useTheme";
import WrapperTheme from "./WrapperTheme";

const Header = ({ title = "aaa" }) => {
  // console.log("Props values", title);
  const { theme, setTheme } = useTheme();
  return (
    <WrapperTheme>
      Đây là giao diện :{theme}
      <div className="flex">
        <button
          className="border-2 mr-1 p-2 rounded-xl cursor-pointer"
          onClick={() => {
            setTheme("light");
          }}
        >
          switch Theme light
        </button>
        <button
          className="border-2 mr-1 p-2 rounded-xl cursor-pointer"
          onClick={() => {
            setTheme("dark");
          }}
        >
          switch Theme dark
        </button>
      </div>
    </WrapperTheme>
  );
};

export default Header;
