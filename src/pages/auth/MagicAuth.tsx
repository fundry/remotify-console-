import React, { useState, useRef } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Card, Image, Spinner } from "react-bootstrap";
import media from "styled-media-query";
import { Formik } from "formik";
import * as Yup from "yup";
import { IoIosArrowRoundForward, IoIosWarning } from "react-icons/io";

const Input = styled.input`
  height : 6vh
  width : 25em
  padding-left : 10px
  border: 1.1px solid #361f94
  font-size : 1.1em
  border-radius : 3px
  ${media.lessThan("small")`
   font-size: 1em
   width : 20em
`};
`;

const Body = styled.div`
  padding: 1em;
`;

const Error = styled.p`
    padding-right : 5px
    padding-top : 4px
  `;

const Text = styled.p`
  font-size: 1.2em;
  ${media.lessThan("small")`
     font-size: 1.05em
  `};
`;

const CardHead = styled.div`
  padding : 1em
  color : #fff
  text-align : center
  background : blue
`;

const Heading = styled.div`
  text-align : center
  padding-bottom : 15px
`;

const Title = styled.h2`
  ${media.lessThan("small")`
       font-size: 1.7em
    `};
`;

const CardHeadText = styled.h4`
  font-weight: normal ${media.lessThan("small")`
     font-size: 1.3em
    `};
`;

const Org = styled.h4`
    font-weight: normal
    text-align: center
    ${media.lessThan("small")`
      font-size: 1.4em
    `};
  `;

const MagicAuth = (): JSX.Element => {
  const [Accept, setAccept] = useState<boolean>(false);

  const NameInput = useRef<HTMLInputElement>();

  const CardBody = styled.div`
    padding: 0.5em;
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

  return (
    <Body>
      <br />
      <br />
      <br />

      <Heading>
        <Title>
          {" "}
          <a href="https://remotify.netlify.com"> Remotify </a>{" "}
        </Title>
        <Text>
          Please accept and setup your credentials for your invitation
        </Text>
      </Heading>

      <Flex justifyCenter>
        <Card
          style={{
            boxShadow: "0px 5px 7px grey"
          }}
        >
          <CardHead>
            <h4> {!Accept ? " Accept Invitation" : "Setup Passcode"}</h4>
          </CardHead>

          <CardBody style={{ padding: "1em" }}>
            <div>
              <Flex justifyCenter>
                <div>
                  <Flex justifyCenter>
                    {" "}
                    <Image
                      fluid
                      src={require("../../../images/lawyer.png")}
                      style={{ height: "110px" }}
                      roundedCircle
                    />{" "}
                  </Flex>
                  <Org> Fundry Organization </Org>
                  <br />{" "}
                </div>
              </Flex>
            </div>

            {!Accept ? (
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
                  <form>
                    <div>
                      <label htmlFor="name" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Office Name"
                        ref={NameInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />

                      {errors ? (
                        <Flex>
                          <IoIosWarning
                            style={{ fontSize: "1.5em", color: "red" }}
                          />
                          <Error> {errors.name} </Error>
                        </Flex>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="password" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Office Password"
                        ref={NameInput}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />

                      {errors ? (
                        <Flex>
                          <IoIosWarning
                            style={{ fontSize: "1.5em", color: "red" }}
                          />
                          <Error> {errors.name} </Error>
                        </Flex>
                      ) : null}
                    </div>
                  </form>
                )}
              </Formik>
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
          </CardBody>
        </Card>
      </Flex>
    </Body>
  );
};

export default MagicAuth;
