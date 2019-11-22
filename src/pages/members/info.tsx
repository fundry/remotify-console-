import React, { useState } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import media from "styled-media-query";
import useWindowWidth from "../../hooks_style";

const Info = (): JSX.Element => {
  const hook: number = useWindowWidth();

  const Body = styled.div`
    padding: 1em;
  `;

  const CurvedButton = styled.button`
    background: #361f94
    height: 60px;
    border: 0px;
    border-radius: 0px 15px 15px 0px;
    color: #fff;
    margin: 0em 1em ;
    padding: 1.2em 1.77em;
    font-size: 1.1em;
    &:hover {
      color: #fff;
    }
  `;

  const Button = styled.button`
    background: #361f94
    height: 50px;
    border: 0px;
    border-radius: 5px;
    color: #fff;
    margin: 0 1em;
    padding: 0.70em 1.50em;
    font-size: 1.1em;

    &:hover {
      color: #fff;
    }
  `;

  const Input = styled.input`
    padding: 1em
    padding-left: 1em
    font-size: 1.1em
    width: 30em
    height : 5vh
    border: 0px
    margin-top :10px
    background: transparent
  `;

  const Box = styled.div`
    border: 1px solid #361f94
    border-radius: 0px 15px 15px 0px
    height: 7.4vh
    width: 32em
   `;

  const [Invite, SetInvite] = useState<boolean>(false);
  const [Notice, SetNotice] = useState<boolean>(false);

  return (
    <Body>
      {!Invite ? (
        <Flex justifyCenter>
          <Button
            onClick={() => {
              SetInvite(true);
            }}
          >
            Invite
          </Button>
        </Flex>
      ) : (
        <Flex justifyCenter>
          <Box>
            <Flex justifyBetween>
              <Input placeholder="Invite Staff" />

              <CurvedButton style={{ cursor: "pointer" }}>Invite </CurvedButton>
            </Flex>
          </Box>
        </Flex>
      )}
      <hr />
    </Body>
  );
};

export default Info;
