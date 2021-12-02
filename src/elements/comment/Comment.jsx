import React from "react";
import "./comment.scss";

const Comment = ({ data, update }) => {
  return (
    <>
      <div className="comment-item">
        <div className="comment-item__photo">
          <img
            src="https://via.placeholder.com/50"
            alt="placeholder"
            className="image"
          />
        </div>
        <div className="comment-item__like">
          <svg className="icon icon-heart">
            <use xlinkHref="#icon-heart"></use>
          </svg>
        </div>
        <div className="comment-item__content">
          <div className="comment-item__content__wrapper">
            <h6 className="comment-item__username">{data.name}</h6>
            <p className="comment-item__date">({update})</p>
          </div>
          <p className="comment-item__text">{data.text}</p>
        </div>
      </div>
    </>
  );
};

export default Comment;
