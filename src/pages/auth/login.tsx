import React, { useRef, useState } from "react";
import { Card, Spinner, Image } from "react-bootstrap";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { IoIosArrowRoundForward, IoIosWarning } from "react-icons/io";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import media from "styled-media-query";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = (props): JSX.Element => {
  const Body = styled.div`
    padding: 1em;
  `;

  const CardHead = styled.div`
  padding : 1em
  color : #fff
  text-align : center
  background : blue
`;

  const CardBody = styled.div`
    padding: 0.5em;
  `;

  const Input = styled.input`
  height : 6vh
  width : 25em
  padding-left : 10px
  border: 1.1px solid #361f94
  font-size : 1.2em
  border-radius : 3px
`;

  const Heading = styled.div`
  text-align : center
  padding-bottom : 15px
`;

  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border-radius: 3px;
    height: 35px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 1.5em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: transparent;
    }
  `;

  const Text = styled.p`
    font-size: 1.2em;
  `;

  const Error = styled.p`
    padding-right : 5px
    padding-top : 4px
  `;

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(8, "Not less than 3")
      .max(24, "More than 25")
      .required("must have a name "),
    password: Yup.string()
      .max(37, "More than 25")
      .required("must have a password ")
  });

  const NameInput = useRef<HTMLInputElement>();
  const [Name, setName] = useState<Boolean>(false);
  const [Loading, setLoading] = useState<Boolean>(false);
  const { AuthUser } = props.AuthStore;

  const checkUser = () => {
    setLoading(true);
    AuthUser();

    setTimeout(() => {
      setName(true);
      setLoading(false);
    }, 3000);
  };

  return (
    <Body>
      <br />
      <br />
      <br />
      <br />

      <Heading>
        <h2>
          {" "}
          <a href="https://remotify.netlify.com"> Remotify </a>{" "}
        </h2>
        <Text>
          Login to use the Remotify Console <br /> for your Team, Hackathon and
          Organization.
        </Text>
      </Heading>

      <Flex justifyCenter>
        <Card
          style={{
            boxShadow: "0px 5px 7px grey"
          }}
        >
          <CardHead>
            <h4> {!Loading ? " Sign in" : "Checking account name"} </h4>
          </CardHead>

          <CardBody style={{ padding: "1em" }}>
            <div>
              {!Name ? null : (
                <Flex justifyCenter>
                  <div>
                    <Flex justifyCenter>
                      {" "}
                      <Image
                        fluid
                        src={require("../../images/lawyer.png")}
                        style={{ width: "25%", height: "130px" }}
                        roundedCircle
                      />{" "}
                    </Flex>
                    <h4 style={{ fontWeight: "normal", textAlign: "center" }}>
                      {" "}
                      Fundry Organization{" "}
                    </h4>
                    <br />{" "}
                  </div>
                </Flex>
              )}
            </div>

            {!Loading ? (
              <div>
                <form>
                  <div>
                    <div style={{ paddingBottom: "5px", paddingLeft: "10px" }}>
                      <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                        {" "}
                        Workspace {!Name ? "Name" : "Password"}
                      </p>
                    </div>

                    <Formik
                      initialValues={{ name: "", password: "" }}
                      validationSchema={validation}
                      onSubmit={(values, { setSubmitting }) => {}}
                    >
                      {({
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        values,
                        errors
                      }) => (
                        <div>
                          {!Name ? (
                            <div>
                              <label htmlFor="name" />
                              <Input
                                id="name"
                                type="text"
                                placeholder="Office Name"
                                ref={NameInput}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <Flex>
                                <IoIosWarning style={{ fontSize: "1.5em" }} />
                                <Error> {errors.name} </Error>
                              </Flex>
                            </div>
                          ) : (
                            <div>
                              <label htmlFor="password" />
                              <Input
                                id="password"
                                type="password"
                                placeholder="Office Password"
                                ref={NameInput}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                          )}
                          <Error> {errors.password} </Error>
                        </div>
                      )}
                    </Formik>
                  </div>
                </form>
                <br />
                <div style={{ textAlign: !Name ? "right" : "center" }}>
                  {!Name ? (
                    <Button
                      onClick={() => {
                        checkUser();
                      }}
                    >
                      <Flex>
                        <p style={{ paddingRight: "5px" }}>Continue </p>
                        <IoIosArrowRoundForward
                          style={{ fontSize: "1.7em", color: "white" }}
                        />{" "}
                      </Flex>
                    </Button>
                  ) : (
                    <Link to="/profile">
                      {" "}
                      <Button>
                        <Flex>Login</Flex>
                      </Button>{" "}
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ padding: "2em" }}>
                <br />
                <Flex justifyCenter>
                  <Spinner animation="grow" variant="primary" />
                  <Spinner animation="grow" variant="secondary" />
                  <Spinner animation="grow" variant="success" />
                  <Spinner animation="grow" variant="danger" />
                  <Spinner animation="grow" variant="warning" />
                  <Spinner animation="grow" variant="info" />
                  <Spinner animation="grow" variant="light" />
                </Flex>
                <br />
              </div>
            )}

            <div>
              <br />
              <Text style={{ paddingLeft: "15px", textAlign: "center" }}>
                <a href="https://remotify.netlify.com/register/services">
                  Create{" "}
                </a>{" "}
                an account
              </Text>
            </div>
          </CardBody>
        </Card>
      </Flex>
    </Body>
  );
};

export default inject("AuthStore")(observer(Login));
