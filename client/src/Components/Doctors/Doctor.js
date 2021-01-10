import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { editUser, getUser } from "../../JS/actions/user";
const Doctor = ({ user }) => {
  const dispatch = useDispatch();
 
  return (
    <div className="col-md-2 single-member col-sm-4">
      <div className="person">
       
      </div>
      <div className="person-detail">
        <div className="arrow-bottom" />
        <h3>Dr. {user.name}</h3>
        <p>{user.lastName}</p>
        <Link to="DoctorDetails">
          <button
            className="btn btn-primary btn-normal btn-inline"
            target="_self"
            onClick={() => dispatch(getUser(user._id))}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
