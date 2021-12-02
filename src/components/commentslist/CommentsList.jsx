import React, { useEffect, useState } from "react";
import "./commentslist.scss";
import Comment from "../../elements/comment/Comment";
import Pagination from "../pagination/Pagination";
import moment from "moment";
import Button from "../../elements/button/Button";

const CommentsList = ({ newComment, newCommentUpdated }) => {
  const [URL, setURL] = useState(
    "https://jordan.ashton.fashion/api/goods/30/comments?page=1"
  );
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [items, setItems] = useState([]);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [lastPageURL, setLastPageURL] = useState("");
  const getComments = (values) => {
    setLoading(true);
    fetch(values)
      .then((response) => response.json())
      .then((response) => {
        newCommentUpdated();
        setItems(response.data);
        setURL(response["next_page_url"]);
        setLastPage(response["last_page"]);
        setCurrentPage(response["current_page"]);
        setLinks(response.links);
        setTotal(response.total);
        setLastPageURL(response["last_page_url"]);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (newComment) {
      getComments(lastPageURL);
    }
  }, [newComment]);

  useEffect(() => {
    if (!loading) {
      getComments(URL);
    }
  }, []);

  return (
    <>
      <div className="comments">
        <div className="comments__data">
          <div className="comments__data__count">{total} Responses</div>
          <div className="comments__data__sort">
            <span className="data-text">Newest</span>
            <span className="data-text">Most Liked</span>
            <span className="data-text">Oldest</span>
          </div>
        </div>
        {items.map((item) => {
          return (
            <Comment
              data={item}
              key={item.id}
              update={moment(item["updated_at"]).fromNow()}
            />
          );
        })}
        <div className="comments__button">
          <Button
            className={
              currentPage !== lastPage ? "button" : "button button--disabled"
            }
            content={"See more"}
            onClick={() => getComments(URL)}
          />
        </div>
        <Pagination
          comments={getComments}
          links={links}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      </div>
    </>
  );
};

export default CommentsList;
