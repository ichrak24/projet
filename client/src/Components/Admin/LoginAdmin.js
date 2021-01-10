import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

import { ToastsContainer, ToastsStore } from "react-toasts";
import "./LoginAdmin.css";
import { loginUser } from "../../JS/actions/user";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="y">
      <div className="app flex-row align-items-center ">
        <Container>
          <ToastsContainer store={ToastsStore} />
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <CardBody className="card">
                  <Form className="form">
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i class="fas fa-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Email"
                        autoComplete="off"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>

                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i class="fas fa-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-off"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </InputGroup>

                    <Row>
                      <Col xs="6">
                      
                          <Button
                            color="primary"
                            className="px-4"
                            onClick={() =>
                              dispatch(loginUser({ email, password }, history))
                            }
                          >
                            Login
                          </Button>
                    
                      </Col>
                      <Col xs="6" className="text-right">
                        <Button color="link" className="px-0">
                          Forgot password?
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginAdmin;
