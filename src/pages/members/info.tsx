import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";

const Info = (): JSX.Element => {
  const Body = styled.div`
    padding: 1em;
  `;

  const Button = styled.button`
    background: #361f94
    height: 70px;
    border: 0px;
    border-radius: 0px 15px 15px 0px;
    color: #fff;
    margin: 0 1em;
    padding: 1.2em 1.77em;
    font-size: 1.1em;
    &:hover {
      color: #361f94;
    }
  `;

  const Input = styled.input({
    padding: "1em",
    paddingLeft: "2em",
    fontSize: "1.2em",
    width: "25em",
    border: "0px",
    background: "transparent"
  });

  const Box = styled.div({
    border: "1px solid #361f94 ",
    borderRadius: "0px 15px 15px 0px",
    height: "7.4vh"
  });

  return (
    <Body>
      <p> info </p>

      <Flex justifyCenter>
        <Box>
          <Flex justifyBetween>
            <Input placeholder="Invite Staff" />

            <Button style={{ cursor: "pointer" }}> Invite </Button>
          </Flex>
        </Box>
      </Flex>

      <hr />
    </Body>
  );
};

export default Info;
