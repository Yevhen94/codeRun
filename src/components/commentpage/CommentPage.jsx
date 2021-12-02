import React, { useState } from "react";
import "./commentpage.scss";
import CommentForm from "../commentform/CommentForm";
import CommentsList from "../commentslist/CommentsList";

const CommentPage = () => {
  const [newComment, setNewComment] = useState(false);

  return (
    <>
      <main className="main">
        <div className="main__wrapper">
          <div className="main__form">
            <CommentForm
              submitted={() => {
                setNewComment(true);
              }}
            />
          </div>
          <div className="main__comments">
            <CommentsList
              newComment={newComment}
              newCommentUpdated={() => {
                setNewComment(false);
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default CommentPage;
