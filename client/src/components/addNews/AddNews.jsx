import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { addNews, updateNews } from "../../redux/news-store/action";

import { newsModel } from "../../models/newsModel";

import AddNewsS from "./style/AddNewsS";
import Input from "./style/Input";
import Button from "./style/Button";

import New from "../new/New";

function AddForm(props) {
  const location = useLocation();

  const [state, setState] = useState({
    title: location.state === null ? "" : location.state.title,
    imgLink: location.state === null ? "" : location.state.imgLink,
    newsText: location.state === null ? "" : location.state.newsText,
    update: location.state === null,
    buttonText: location.state === null ? "Add" : "Update",
  });

  const dispatch = useDispatch();
  const add = () => {
    const news = new newsModel(
      0,
      state.title,
      state.imgLink,
      state.newsText,
      new Date().toLocaleDateString("en-US")
    );
    if (!state.update) {
        dispatch(updateNews(news))
    } else {
      dispatch(addNews(news));
    }
  };

  return (
    <AddNewsS>
      <Input
        placeholder="Title *"
        value={state.title}
        onChange={(e) =>
          setState((existingValues) => ({
            ...existingValues,
            title: e.target.value,
          }))
        }
      />
      <Input
        placeholder="News text *"
        value={state.newsText}
        onChange={(e) =>
          setState((existingValues) => ({
            ...existingValues,
            newsText: e.target.value,
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

      <New new={state} />
      <Button onClick={add}>{state.buttonText} news</Button>
    </AddNewsS>
  );
}

export default AddForm;
