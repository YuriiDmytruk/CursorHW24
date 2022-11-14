import React from "react";
import { useSelector } from "react-redux";

import New from "../new/New";
import NewsS from "./style/NewsS";


function Users() {
  const news = useSelector((state) => state.news);
  return (
    <NewsS>
      {news.map((e) => (
        <New key={e.id} new={e} />
      ))}
    </NewsS>
  );
}

export default Users;
