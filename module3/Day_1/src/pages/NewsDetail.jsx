import React from "react";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
//   call api với id sẽ lấy đc từ url
// thông tin chi tiết của user đó

  return (
    <div>
      <h2>Đây là thông tin của người dùng có id là {id}</h2>
    </div>
  );
};

export default NewsDetail;
