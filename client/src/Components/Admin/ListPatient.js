import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../JS/actions/user";
import { Card, CardBody, Col, Row } from "reactstrap";
import Patient from "./Patient";
import "./List.css";

const ListPatient = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  console.log(users);

  useEffect(() => {
    if (users)
    {
      dispatch(getUsers("patient"));
    }
  }, []);
  return (
    <div>
      <section>
        <div className="contact-list-container">
          <div className="animated fadeIn">
            <Row>
              <Col xs="12" sm="12" md="12">
                <Card>
                  <CardBody>
                    <h1 className="h1 text-center text-success font-weight-bold">
                      List Patient
                    </h1>
                    <hr></hr>
                    <div class="wrap">
                      <div class="search">
                        <input
                          type="text"
                          class="searchTerm"
                          placeholder="What are you looking for?"
                        />
                        <button type="submit" class="searchButton">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <div className="table-responsive py-3">
                      <table className="table">
                        <thead>
                          <tr className="bg-blue">
                            <th>FullName</th>
                            <th>E-mail</th>
                            <th>Phone</th>

                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {users.map((el) => (
                            <Patient key={el._id} user={el} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListPatient;
