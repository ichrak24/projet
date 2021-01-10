import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import "./LoginAdmin.css";

import { registerUser, loginUser } from "../../JS/actions/user";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const AddPsy = () => {
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
    <div className="y">
      <div className="animated fadeIn">
        {/* <ToastsContainer store={ToastsStore} />*/}
        <Row className="c">
          <Col xs="12" sm="12" md="12">
            <Card className="card">
              <CardBody className="body">
                <form>
                  <h1 className="h1 text-center text-success font-weight-bold">
                    Add Psy
                  </h1>
                  <hr></hr>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor=""
                          className="font-weight-bold text-primary"
                        >
                          <i className="fa fa-user-circle fa-lg pr-2"></i>{" "}
                          Firstname
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor=""
                          className="font-weight-bold text-primary"
                        >
                          <i className="fa fa-user-circle fa-lg pr-2"></i>{" "}
                          Lastname
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="lastname"
                          id=""
                          aria-describedby="emailHelpId"
                          placeholder=""
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor=""
                          className="font-weight-bold text-primary"
                        >
                          <i className="fa fa-map-marker fa-lg pr-2"></i>{" "}
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          id=""
                          aria-describedby="emailHelpId"
                          placeholder=""
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor=""
                          className="font-weight-bold text-primary"
                        >
                          <i className="fa fa-phone fa-lg pr-2"></i> Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor=""
                          className="font-weight-bold text-primary"
                        >
                          <i className="fa fa-envelope fa-lg pr-2"></i> E-mail
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id=""
                          aria-describedby="emailHelpId"
                          placeholder=""
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor=""
                          className="font-weight-bold text-primary"
                        >
                          {" "}
                          <i className="fa fa-lock fa-lg pr-2"></i> Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id=""
                          className="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor=""
                            className="font-weight-bold text-primary"
                          >
                            <i className="fa fa-user-circle fa-lg pr-2"></i>{" "}
                            Birth
                          </label>
                          <input
                            type="text"
                            name="birth"
                            id=""
                            className="form-control"
                            placeholder=""
                            aria-describedby="helpId"
                            onChange={(e) => setDatenaiss(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            htmlFor=""
                            className="font-weight-bold text-primary"
                          >
                            <i className="fa fa-user-circle fa-lg pr-2"></i>{" "}
                            Role
                          </label>
                          <input
                            type="text"
                            name="birth"
                            id=""
                            className="form-control"
                            placeholder=""
                            aria-describedby="helpId"
                            onChange={(e) => setRole(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-md-6 d-flex justify-content-start pl-3">
                        <Link to="DashboardAdmin">
                          <button
                            type="button"
                            name=""
                            id=""
                            className="btn btn-dangerr font-weight-bold w-20 btn-lg"
                          >
                            <i className="fa fa-refresh pr"></i> Reset
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-6 d-flex justify-content-end pr-3">
                        <button
                          type="button"
                          name=""
                          id=""
                          className="btn btn-success font-weight-bold w-20 btn-lg"
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
                        >
                          <i className="fa fa-send pr"></i> Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddPsy;
