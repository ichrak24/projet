import React, { useState, useEffect } from "react";
import { getposts } from "../../JS/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { Nav, Form, Navbar, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import { toggleFalse } from "../../JS/actions/edit";

import Problem from "./problem";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
 const post = useSelector((state) => state.postReducer.post);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
 
  const loadposts = useSelector((state) => state.postReducer.loadposts);
  const [search, setSearch] = useState("");
  const searchposts = (search) => {
    setSearch(search);
  };
  useEffect(() => {
    dispatch(getposts());
  }, [search]);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          {isAuth ? (
            <Button
              inverted
              color="blue"
              onClick={() => dispatch(toggleFalse())}
            >
              <Link to="/add"> Add Problem </Link>
            </Button>
          ) : null}
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => searchposts(e.target.value)}
          />
        </Form>
      </Navbar>
      {loadposts ? (
        <Spinner animation="border" variant="success" />
      ) : (
        posts
          
          .map((el) => <Problem key={el._id} post={el} />)
      )}
    </div>
  );
};

export default PostList;
