import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getUser } from "../../JS/actions/user";
import { toggleTrue } from "../../JS/actions/edit";
const ItemPsy = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>
        {user.name} {user.lastName}
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>

      <td>
        <div className="row ">
          <Link to="/PsyInfo">
            <div name="col-xs-4 col-md-3 d-flex justify-content-end">
              <i
                class="fa fa-info-circle"
                aria-hidden="true"
                onClick={() => dispatch(getUser(user._id))}
              ></i>

              {/*<button onClick={() => dispatch(getUser(user._id))}>info</button>*/}
            </div>
          </Link>

          <div className="col-xs-4 col-md-3 d-flex justify-content-center">
            <i
              class="fa fa-trash"
              aria-hidden="true"
              onClick={() => {
                dispatch(deleteUser(user._id));
                dispatch(toggleTrue());
              }}
            ></i>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ItemPsy;
