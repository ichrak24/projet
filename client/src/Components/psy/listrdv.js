import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Card, CardBody, Col, Row } from 'reactstrap';
import { getRdv, getRdvs } from "../../JS/actions/rdv";
import Itemrdv from "./rdv";
import "./List.css";
const Listrdv = () => {
    const rdvs = useSelector((state) => state.rdvReducer.rdvs);
     const psy = useSelector((state) => state.userReducer.user);
     const dispatch = useDispatch();
     useEffect(() => {
       if (rdvs && psy) {
         dispatch(getRdvs(psy._id));
       }
     }, [psy, rdvs]);
    return (
      <section>
        <div className="contact-list-container">
          <div className="animated fadeIn">
            <Row>
              <Col xs="12" sm="12" md="12">
                <Card>
                  <CardBody>
                    <h1 className="h1 text-center text-success font-weight-bold">
                      List RDV
                    </h1>
                    <hr></hr>
                    <div class="wrap">
                      <div class="search">
                        <input
                          type="text"
                          className="searchTerm"
                          placeholder="What are you looking for?"
                        />
                        <button type="submit" class="searchButton">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                    <div className="table-responsive py-3">
                      <table className="table">
                        <thead>
                          <tr className="bg-blue">
                            <th>FullName</th>
                            <th>E-mail</th>
                            <th>Date</th>
                            <th>N.Patient</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rdvs
                        
                              
            
                            .map((el, index) => (
                              <Itemrdv key={index} item={el} />
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
    );
}

export default Listrdv
