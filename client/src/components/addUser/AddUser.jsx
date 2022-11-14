import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../../redux/users-store/action";

import { userModel } from "../../models/userModel";

import AddUserS from "./style/AddUserS";
import Input from "./style/Input";
import Button from "./style/Button";

import User from "../user/User";

function AddForm() {
  const [state, setState] = useState({
    name: "",
    userName: "",
    imgLink: "",
  });

  const dispatch = useDispatch();
  const add = () => {
    dispatch(
      addUser(new userModel(0, state.name, state.userName, state.imgLink))
    );
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
