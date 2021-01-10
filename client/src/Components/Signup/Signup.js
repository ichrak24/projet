import React, { useState } from "react";
import "./Signup.css";
import { registerUser, loginUser } from "../../JS/actions/user";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const edit = useSelector((state) => state.editReducer.edit);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [datenaiss, setDatenaiss] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="card">
            <div className="login-box">
              <div className="login-snip">
                {" "}
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  defaultChecked
                />
                <label htmlFor="tab-1" className="tab">
                  Login
                </label>{" "}
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">
                  Sign Up
                </label>
                <div className="login-space">
                  <div className="login">
                    <div className="group">
                      {" "}
                      <label htmlFor="user" className="label">
                        Username
                      </label>{" "}
                      <input
                        id="userr"
                        type="text"
                        className="input"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Password
                      </label>{" "}
                      <input
                        id="passs"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <input
                        id="check"
                        type="checkbox"
                        className="check"
                        defaultChecked
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="check">
                        <span className="icon" /> Keep me Signed in
                      </label>
                    </div>
                    <div className="group">
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign In"
                        onClick={() =>
                          dispatch(loginUser({ email, password }, history))
                        }
                      />
                    </div>
                    <div className="hr" />
                    <div className="foot">
                      <a href="/">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="sign-up-form">
                    <div className="group">
                      {" "}
                      <label htmlFor="user" className="label">
                        Username
                      </label>{" "}
                      <input
                        id="user"
                        type="text"
                        className="input"
                        placeholder="Create your Username"
                        onChange={(e) => setName(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        lastName
                      </label>{" "}
                      <input
                        id="last"
                        type="text"
                        className="input"
                        placeholder="Create your lastName"
                        onChange={(e) => setLastName(e.target.value)}
                      />{" "}
                    </div>

                    <div className="group">
                      {" "}
                      <label htmlFor="user" className="label">
                        Date de Naissance
                      </label>{" "}
                      <div className="nativeDatePicker">
                        <input
                          type="date"
                          id="bday"
                          name="bday"
                          onChange={(e) => setDatenaiss(e.target.value)}
                        />
                        <span className="validity"></span>
                      </div>
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Email Address
                      </label>{" "}
                      <input
                        id="email"
                        type="text"
                        className="input"
                        placeholder="Enter your email address"
                        onChange={(e) => setEmail(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Address
                      </label>{" "}
                      <input
                        id="last"
                        type="text"
                        className="input"
                        placeholder="Create your adress"
                        onChange={(e) => setAddress(e.target.value)}
                      />{" "}
                    </div>
                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        phone
                      </label>{" "}
                      <input
                        id="last"
                        type="text"
                        className="input"
                        placeholder="Create your phone"
                        onChange={(e) => setPhone(e.target.value)}
                      />{" "}
                    </div>

                    <div className="group">
                      <div className="row">
                        <label htmlFor="pass" className="label">
                          Role
                        </label>
                        <div className="col-sm-10">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios1"
                              value="psy"
                              checked
                              onChange={(e) => setRole(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios1"
                            >
                              Psy
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="gridRadios2"
                              value="patient"
                              onChange={(e) => setRole(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              for="gridRadios2"
                            >
                              Patient
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      {" "}
                      <label htmlFor="pass" className="label">
                        Password
                      </label>{" "}
                      <input
                        id="pass"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Repeat your password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="group">
                      {" "}
                      <input
                        type="submit"
                        className="button"
                        defaultValue="Sign Up"
                        onClick={() =>
                          dispatch(
                            registerUser(
                              {
                                name,
                                lastName,
                                email,
                                password,
                                Address,
                                phone,
                                role,
                                datenaiss,
                              },
                              history
                            )
                          )
                        }
                      />{" "}
                    </div>
                    <div className="hr" />
                    <div className="foot">
                      {" "}
                      <label htmlFor="tab-1">Already Member?</label>{" "}
                    </div>
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

export default Signup;
