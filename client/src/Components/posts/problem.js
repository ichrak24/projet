import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { deletepost, getpost } from "../../JS/actions/post";
import { Link } from "react-router-dom";
import { toggleTrue } from "../../JS/actions/edit";
import "./problem.css";
const Problem = ({ post }) => {
     const dispatch = useDispatch();
     const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <div className="container mt-4 mb-4">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="d-flex justify-content-between p-2 px-3">
              <div className="d-flex flex-row align-items-center">
                {" "}
                <img
                  src="https://i.imgur.com/UXdKE3o.jpg"
                  width={50}
                  className="rounded-circle"
                />
                <div className="d-flex flex-column ml-2">
                  {" "}
                  <span className="font-weight-bold">
                    {post.user.name}
                  </span>{" "}
                  <small className="text-primary">{post.user.lastName}</small>{" "}
                </div>
              </div>
              <div className="d-flex flex-row mt-1 ellipsis">
                {" "}
                <small className="mr-2">20 mins</small>{" "}
                <i className="fa fa-ellipsis-h" />{" "}
              </div>
            </div>{" "}
            <div className="p-2">
              <p className="text-justify">{post.description}</p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row icons d-flex align-items-center">
                  {" "}
                  <i className="fa fa-heart" />{" "}
                  <i className="fa fa-smile-o ml-2" />{" "}
                </div>
                <div className="d-flex flex-row muted-color">
                  {" "}
                  <span>
                    2 comments
                  </span> <span className="ml-2">Share</span>{" "}
                  {isAuth ? (
                    <span>
                      <div className="ui two buttons">
                        <Link to={`/edit/${post._id}`}>
                          <Button
                            inverted
                            color="green"
                            onClick={() => {
                              dispatch(getpost(post._id));
                              dispatch(toggleTrue());
                            }}
                          >
                            Edit
                          </Button>
                        </Link>
                        <Button
                          inverted
                          color="red"
                          onClick={() => {
                            dispatch(deletepost(post._id));
                            dispatch(toggleTrue());
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </span>
                  ) : null}
                </div>
              </div>
              <hr />
              <div className="comments">
                <div className="d-flex flex-row mb-2">
                  {" "}
                  <img
                    src="https://i.imgur.com/9AZ2QX1.jpg"
                    width={40}
                    className="rounded-image"
                  />
                  <div className="d-flex flex-column ml-2">
                    {" "}
                    <span className="name">Daniel Frozer</span>{" "}
                    <small className="comment-text">
                      I like this alot! thanks alot
                    </small>
                    <div className="d-flex flex-row align-items-center status">
                      {" "}
                      <small>Like</small> <small>Reply</small>{" "}
                      <small>Translate</small> <small>18 mins</small>{" "}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row mb-2">
                  {" "}
                  <img
                    src="https://i.imgur.com/1YrCKa1.jpg"
                    width={40}
                    className="rounded-image"
                  />
                  <div className="d-flex flex-column ml-2">
                    {" "}
                    <span className="name">Elizabeth goodmen</span>{" "}
                    <small className="comment-text">Thanks for sharing!</small>
                    <div className="d-flex flex-row align-items-center status">
                      {" "}
                      <small>Like</small> <small>Reply</small>{" "}
                      <small>Translate</small> <small>8 mins</small>{" "}
                    </div>
                  </div>
                </div>
                <div className="comment-input">
                  {" "}
                  <input type="text" className="form-control" />
                  <div className="fonts">
                    {" "}
                    <i className="fa fa-camera" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
