import React, { useState, useRef } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { IoIosArrowRoundForward, IoIosWarning } from "react-icons/io";
import Flex from "styled-flex-component";
import { Planet } from "react-kawaii";

interface CustomProps {
  accepted: boolean;
  declined: boolean;
  acceptFunc: any;
  declineFunc: any;
}

const Invite = ({
  accepted,
  declined,
  acceptFunc,
  declineFunc
}: CustomProps): JSX.Element => {
  const Body = styled.div`
    padding: 0.5em;
  `;

  const Text = styled.p`
    font-size: 1.2em;
    text-align: center ${media.lessThan("small")`
     font-size: 1.05em
  `};
  `;

  const Button = styled.button`
    background: #fff;
    text-align: right;
    border-radius: 3px;
    height: 35px;
    border: 1px solid #0e2f5a;
    color: #361f94;
    margin: 0 1em;
    padding: 0.25em 1.5em;
    font-size: 1em;
    &:hover {
      background: transparent;
    }
  `;

  const [mood, setMood] = useState<string>("shocked");

  // controlling react-kawaii svg

  if (declined) {
    setTimeout(() => {
      setMood("sad");
    }, 1200);
  }
  // =============================

  return (
    <Body>
      <Flex justifyCenter>
        {!declined ? (
          <Planet mood="excited" size="10em" />
        ) : (
          <Planet mood={mood} size="10em" />
        )}
      </Flex>
      <br />
      <Flex justifyCenter>
        {!declined ? (
          <div>
            <Text>
              You have been invited to work with the <b>Fundry Organization </b>{" "}
              as a <b> FrontEnd Engineer </b>{" "}
            </Text>

            <Flex justifyCenter>
              <Button
                onClick={() => {
                  acceptFunc();
                }}
              >
                Accept Invitation
              </Button>
              <Button
                onClick={() => {
                  declineFunc();
                }}
              >
                Decline Invitation{" "}
              </Button>
            </Flex>
          </div>
        ) : (
          <div>
            <Button> Confirm Decline </Button>
          </div>
        )}
      </Flex>
    </Body>
  );
};

export default Invite;
