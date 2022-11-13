import React from "react";

import UserS from "./style/UserS.js";

function User(props) {
  return (
    <UserS>
      <div class="card">
        <img
          src={props.user.imgLink}
          alt="userImg"
          class="card__image"
        />
        <p class="card__name">{props.user.name}</p>
        <p class="card__name">{props.user.userName}</p>
      </div>
    </UserS>
  );
}

export default User;
