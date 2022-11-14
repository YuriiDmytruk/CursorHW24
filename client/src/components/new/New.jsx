import React from "react";
import { NavLink } from "react-router-dom";

import NewS from "./style/NewS";

function Publication(props) {
  return (
    <NewS>
      <div className="container">
        <div className="card">
          <div className="card__header">
            <img
              src={props.new.imgLink}
              alt="card__image"
              className="card__image"
              width="600"
              height="200"
            />
          </div>
          <div className="card__body">
            <NavLink
              className="link"
              to={"/addNews"}
              state = {props.new}>
              <h4>{props.new.title}</h4>
            </NavLink>
            <p>{props.new.newsText}</p>
          </div>
          <div className="card__footer">
            <small>{props.new.date}</small>
          </div>
        </div>
      </div>
    </NewS>
  );
}

export default Publication;
