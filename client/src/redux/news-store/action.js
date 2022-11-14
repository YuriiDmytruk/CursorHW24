import { URL } from "../../env.js";

import { ADD_NEWS, RENEW_NEWS } from "../types";
import { newsModel } from "../../models/newsModel";

export const addNews = (news) => {
  return async (dispatch, getState) => {
    news.id = getState().news.length;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(news),
    };

    const request = await fetch(`${URL}/news`, requestOptions);
    const response = await request.json();

    if (response.status === 200) {
      dispatch({ type: ADD_NEWS, payload: news });
    }
  };
};

export async function getNews(dispatch, getState) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: null,
  };

  const request = await fetch(`${URL}/news`, requestOptions);
  const response = await request.json();

  if (response.status === 200) {
    const users = Object.values(response.newsMap);

    let result = [];

    users.forEach((e) => {
      result.push(new newsModel(e.id, e.title, e.imgLink, e.newsText, e.date));
    });

    dispatch({ type: RENEW_NEWS, payload: result });
  }
}

export const updateNews = (news) => {
  return async (dispatch, getState) => {
    const state = getState().news;

    state[news.id] = news;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(news),
    };

    const request = await fetch(`${URL}/news`, requestOptions);
    const response = await request.json();

    if (response.status === 200) {
      dispatch({ type: RENEW_NEWS, payload: state });
    }
  };
};
