import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Card, Image, Spinner } from "react-bootstrap";
import media from "styled-media-query";
import { inject, observer } from "mobx-react";
import { Planet } from "react-kawaii";

import useWindowWidth from "../../../hooks_style";
import Form from "./MagicAuthForm";
import Invite from "./invite";

const Body = styled.div`
  padding: 1em;
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

const Org = styled.h5`
    font-weight: normal
    text-align: center
    ${media.lessThan("small")`
      font-size: 1.4em
    `};
  `;

const MagicAuth = (props): JSX.Element => {
  const CardBody = styled.div`
    padding: 0.5em;
  `;

  const {
    accepted,
    declined,
    AuthUser,
    acceptInvite,
    declineInvite
  } = props.MagicAuth;

  const hooks = useWindowWidth();

  console.log(window.location.href, "location win");

  const [Token, setToken] = useState(null);

  // extract d token from the link using window obj ...
  useEffect(() => {
    setToken(window.location.href);

    // window.location.replace('http://localhost:3000/auth')
  }, []);

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
      <h4> {Token} </h4>
      <Flex justifyCenter>
        <Card
          style={{
            boxShadow: "0px 5px 7px grey"
          }}
        >
          <CardHead>
            <h4> {!accepted ? "Accept Invitation" : "Setup Passcode"}</h4>
          </CardHead>

          <CardBody style={{ padding: "1em" }}>
            {hooks >= 550 ? (
              <div style={{ textAlign: "left" }}>
                <Flex>
                  <Image
                    fluid
                    src={require("../../../images/lawyer.png")}
                    style={{ height: "65px" }}
                    roundedCircle
                  />{" "}
                  <Org style={{ paddingLeft: "10px", paddingTop: "15px" }}>
                    {" "}
                    Fundry Organization{" "}
                  </Org>
                </Flex>
              </div>
            ) : (
              <div>
                <Flex justifyCenter>
                  <div>
                    <Flex justifyCenter>
                      <Image
                        fluid
                        src={require("../../../images/lawyer.png")}
                        style={{ height: "70px" }}
                        roundedCircle
                      />{" "}
                    </Flex>
                    <Org> Fundry Organization </Org>
                    <br />{" "}
                  </div>
                </Flex>
              </div>
            )}
            <Flex justifyCenter>
              {!declined ? (
                <Planet mood="excited" size="10em" />
              ) : (
                <Planet mood="shocked" size="10em" />
              )}
            </Flex>
            <br />{" "}
            {!accepted ? (
              <Invite
                declined={declined}
                declineFunc={declineInvite}
                accepted={accepted}
                acceptFunc={acceptInvite}
              />
            ) : (
              <Form AuthUser={AuthUser} />
            )}
          </CardBody>
        </Card>
      </Flex>
    </Body>
  );
};

export default inject("MagicAuth")(observer(MagicAuth));
