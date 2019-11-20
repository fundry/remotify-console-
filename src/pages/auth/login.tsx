import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { IoIosArrowRoundForward } from "react-icons/io";

const Login = (): JSX.Element => {
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

  const NameInput = useRef<HTMLInputElement>();
  const [Name, setName] = useState<Boolean>(false);

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
            <h4> Sign in </h4>
          </CardHead>

          <CardBody style={{ padding: "1em" }}>
            <form>
              <div>
                <div style={{ paddingBottom: "5px", paddingLeft: "10px" }}>
                  <p style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                    {" "}
                    Workspace {!Name ? "Name" : "Password"}
                  </p>
                </div>
                {!Name ? (
                  <Input
                    type="text"
                    placeholder="Office Name"
                    ref={NameInput}
                  />
                ) : (
                  <Input
                    type="password"
                    placeholder="Office Password"
                    ref={NameInput}
                  />
                )}
              </div>
            </form>

            <br />
            <div style={{ textAlign: "right" }}>
              <Button
                onClick={() => {
                  setName(true);
                }}
              >
                <Flex>
                  <p style={{ paddingRight: "5px" }}>Continue </p>
                  <IoIosArrowRoundForward
                    style={{ fontSize: "1.7em", color: "white" }}
                  />{" "}
                </Flex>
              </Button>
            </div>

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

export default Login;
