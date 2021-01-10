import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "bootstrap";
import { useHistory } from "react-router-dom";
import { editUser, getUser, deleteUser } from "../../JS/actions/user";
import { toggleTrue } from "../../JS/actions/edit";

import "./profil.css";

const Profil = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const psy = useSelector((state) => state.userReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  //useEffect(() => {
  //if (psy) {
  //dispatch(getUser(psy._id));
  //}
  //}, [edit , psy]);

  //const HandleUser = () => {
  //if (!edit) {
  //dispatch(getUser(user));
  // setPost({ ...post, description });
  //} else {
  //dispatch(editUser(psy._id, user));
  //}
  //};

  useEffect(() => {
    if (psy) {
      dispatch(getUser(psy._id));

      setName(psy.name);
      setLastName(psy.lastName);
      setEmail(psy.email);
      setAddress(psy.Address);
      setPhone(psy.phone);
    }
  }, [edit, psy]);
  const HandleUser = () => {
    if (!edit) {
      dispatch(getUser(psy._id));
      // setPost({ ...post, description });
    } else {
      dispatch(
        editUser(psy._id, {
          name,
          lastName,
          email,
          Address,
          phone,
        })
      );
    }
  };

  return (
    <div className="card">
      <div id="login-container">
        <div class="profile-img"></div>
        <div className="description">
          <h1> Name : {psy && psy.name}</h1>
          <h1> LastName : {psy && psy.lastName}</h1>
          <h1>Email : {psy && psy.email}</h1>
          <h1> Phone : {psy && psy.phone}</h1>
          <h1>Address : {psy && psy.Address}</h1>
        </div>
        <br />

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Update Profil
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <button
                    onClick={() => {
                      dispatch(getUser(psy && psy._id));
                      dispatch(toggleTrue());
                    }}
                  >
                    Update Profil
                  </button>
                </h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">LastName</label>

                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      value={lastName}
                      aria-describedby="emailHelp"
                      placeholder="Enter lastName"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Address"
                      value={Address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={phone}
                      placeholder="Enter phone"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={HandleUser}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            dispatch(deleteUser(psy && psy._id));
            dispatch(toggleTrue());
          }}
        >
          Delete Profil
        </button>

        <footer className="footer">
          <div className="likes">
            <p>
              <i className="fa fa-heart"></i>
            </p>
          </div>
          <div className="social">
            <a>Github</a>
            <a>Twitter</a>
            <a>LinkedIn</a>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Profil;
