import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const NewsPage = () => {
  const navigate = useNavigate();
  const handleShowDetail = (id) => {
    navigate(`/news/${id}`);
  };
  return (
    <div>
      <ul>
        <li>
          Đăng -{" "}
          <button
            className="border-2 rounded p-1 hover:bg-amber-200 cursor-pointer transition-all"
            onClick={() => {
              handleShowDetail(1);
            }}
          >
            Xem chi tiết
          </button>
        </li>
        <br />
        <li>
          Dương -{" "}
          <button
            className="border-2 rounded p-1 hover:bg-amber-200 cursor-pointer transition-all"
            onClick={() => {
              handleShowDetail(2);
            }}
          >
            Xem chi tiết
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NewsPage;
