import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import StarRatingComponent from "react-star-rating-component";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { current, getUser } from "../../JS/actions/user";

const DoctorDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.oneuser);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const psy = user && user._id;

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <img src="/assets/img/member1.jpg" alt="" width="285px" height="350" />

        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.lastName}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Card.Text>
            <StarRatingComponent name="rate2" editing={false} starCount={5} />
          </Card.Text>
          <p>{user.phone}</p>
          {isAuth ? (
            <Link to="/rdv">
              <button
                className="btn btn-primary btn-normal btn-inline"
                target="_self"
                onClick={() => {
                  dispatch(getUser(psy));
                  dispatch(current(user._id));
                }}
              >
                Reserver Rendez-vous
              </button>
            </Link>
          ) : (
            <Link to="/signup">
              <button
                className="btn btn-primary btn-normal btn-inline"
                target="_self"
              >
                Reserver Rendez-vous
              </button>
            </Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default DoctorDetails;
