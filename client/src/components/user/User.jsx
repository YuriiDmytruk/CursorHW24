import React from "react";

import UserS from "./style/UserS";

function User(props) {
  return (
    <UserS>
      <div className="card">
        <img
          src={props.user.imgLink}
          alt="userImg"
          className="card__image"
        />
        <p className="card__name">{props.user.name}</p>
        <p className="card__name">{props.user.userName}</p>
      </div>
    </UserS>
  );
}

export default User;
