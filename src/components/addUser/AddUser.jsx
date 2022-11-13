import React from "react";
import { useState } from "react";

import { userModel } from "../../models/userModel.js";

import AddUserS from "./style/AddUserS.js";
import Input from "./style/Input.js";
import Button from "./style/Button.js";

import User from "../user/User.jsx";

function AddForm() {
  const [state, setState] = useState({
    name: "",
    userName: "",
    imgLink: "",
  });

  const add = () => {
    const user = new userModel(
      0,
      state.name,
      state.userName,
      state.imgLink
    );
    //dispatch(addPublication(publication));
  };

  return (
    <AddUserS>
      <Input
        placeholder="Name *"
        value={state.name}
        onChange={(e) =>
          setState((existingValues) => ({
            ...existingValues,
            name: e.target.value,
          }))
        }
      />
      <Input
        placeholder="User name *"
        value={state.userName}
        onChange={(e) =>
          setState((existingValues) => ({
            ...existingValues,
            userName: e.target.value,
          }))
        }
      />

      <Input
        placeholder="Image link *"
        value={state.imgLink}
        onChange={(e) =>
          setState((existingValues) => ({
            ...existingValues,
            imgLink: e.target.value,
          }))
        }
      />

      <User user={state} />
      <Button onClick={add}>Add user</Button>
    </AddUserS>
  );
}

export default AddForm;
