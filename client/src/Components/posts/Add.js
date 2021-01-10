import { Button, Form } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { editpost, postPost } from "../../JS/actions/post";

const Add = () => {
  const postReducer = useSelector((state) => state.postReducer.post);
  const [post, setPost] = useState({ description: "" });

  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit ? setPost(postReducer) : setPost({ description: "" });
    dispatch(postPost(post));
  }, [edit, postReducer]);
  const HandlePost = () => {
    if (!edit) {
      dispatch(postPost(post));
      // setPost({ ...post, description });
    } else {
      dispatch(editpost(postReducer._id, post));
    }
  };

  return (
    <div>
  
        <Form>
          <Form.Field>
            <label> description</label>
            <input
              placeholder=" Name"
              type="text"
              value={post.description}
              onChange={(e) => {
                setPost({ ...post, description: e.target.value });
              }}
            />
          </Form.Field>

          <Link to="/">
            <Button type="submit" onClick={HandlePost}>
              {edit ? "Edit" : "Save"}
              save
            </Button>
          </Link>
        </Form>
      ) 
    </div>
  );
};

export default Add;
