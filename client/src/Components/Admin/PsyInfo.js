import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { getUser } from "../../JS/actions/user";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
const Psyinfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.userReducer.oneuser);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [Address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [datenaiss, setDatenaiss] = useState("");
  // useEffect(() => {
  //   if (user) {
  //     dispatch(getUser(user._id));
  //   }
  // }, [user]);
  return (
    <section>
      <div className="contact-list-container">
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" sm="12" md="12">
              <Card>
                <CardBody>
                  <h1 className="h1 text-center text-success font-weight-bold">
                    Psy Info
                  </h1>
                  <hr></hr>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="font-weight-bold">Firstname</td>
                          <td>{ user.name}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Lastname</td>
                          <td>{user && user.lastName}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Address</td>
                          <td>{ user.Address}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Email</td>
                          <td>{ user.email}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Phone</td>
                          <td>{ user.phone}</td>
                        </tr>
                        <tr>
                          <td className="font-weight-bold">Birth</td>
                          <td>{ user.datenaiss}birth</td>
                        </tr>
                      </tbody>
                      <Link to="ListPsy">
                        <div className=" d-flex justify-content-start pl-5 ">
                          <button
                            type="button"
                            name=""
                            id=""
                            className="btn btn-danger listinfo font-weight-bold w-25 btn-lg "
                          >
                            <i className="fa fa-refresh pr-3 "></i>{" "}
                            <span>List</span>
                          </button>
                        </div>
                      </Link>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Psyinfo;
