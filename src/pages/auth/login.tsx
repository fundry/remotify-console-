import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import Flex from "styled-flex-component";

const Login = (): JSX.Element => {
  const Body = styled.div`
    padding: 1em;
  `;

  const CardHead = styled.div`
  padding : 0.5em
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
`;

  const NameInput = useRef<HTMLInputElement>();
  const [Name, setName] = useState<Boolean>(false);

  return (
    <Body>
      <br />

      <div>
        <h2> Remotify </h2>
      </div>

      <Flex justifyCenter>
        <Card
          style={{
            padding: "1em",
            boxShadow: "0px 3px 5px grey"
          }}
        >
          <CardHead>
            <h4> Sign in </h4>
          </CardHead>

          <CardBody>
            <form>
              {!Name ? (
                <div>
                  <label> Workspace Name </label>
                  <Input
                    type="text"
                    placeholder="Office Name"
                    ref={NameInput}
                  />
                </div>
              ) : (
                <div>
                  <label> Workspace Password </label>
                  <Input
                    type="text"
                    placeholder="Office Password"
                    ref={NameInput}
                  />
                </div>
              )}
            </form>
          </CardBody>
        </Card>
      </Flex>
    </Body>
  );
};

export default Login;
