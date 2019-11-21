import React, { useState } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Image, Tab, Tabs, Modal } from "react-bootstrap";
import { MdHistory } from "react-icons/md";
import { IoMdPersonAdd, IoMdCopy } from "react-icons/io";
import media from "styled-media-query";

const List: Array<Object> = [{ name: "" }, { name: "" }, { name: "" }];

const ProfileInfo = (): JSX.Element => {
  const Body = styled.div`
    padding: 0.5em;
  `;
  const Details = styled.div`
    padding-top: 17px;
  `;

  const Hover = styled.div`
    cursor: pointer;
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
      color: #fff;
      background: transparent;
    }
    ${media.lessThan("small")`
    padding: 0.15em 1em;
    margin: 0 0.25em;
    `};
  `;

  const ModalBody = styled.div`
    padding: 1em;
  `;

  const InviteBox = styled.div`
    border : 1.5px solid #000
    border-radius : 2px
    padding : 0.5em
    width :  30em
  `;

  const InviteTextField = styled.input`
    width : 30em
    border : 1px solid #000
    border-radius : 5px
    padding-left : 10px
    height : 6vh
  `;

  const Label = styled.p`
    padding-left : 40px
    font-size : 1.1em
    font-weight : bold
  `;

  const [Invite, SetInvite] = useState<Boolean>(false);

  return (
    <Body>
      <Modal
        show={true}
        onHide={() => {
          SetInvite(false);
        }}
      >
        <ModalBody>
          <Label> Paste Invitation Link </Label>
          <Flex justifyCenter>
            <InviteBox>
              <Flex justifyBetween>
                <code style={{ fontSize: "1em" }}>
                  {" "}
                  remmkvfgrgrhgrgefefifgigrgmkvfgrgrhgrgefefifgigrgjhjh{" "}
                </code>
                <Hover style={{ paddingLeft: "5px" }}>
                  {" "}
                  <IoMdCopy style={{ fontSize: "2em" }} />{" "}
                </Hover>
              </Flex>
            </InviteBox>
          </Flex>
          <br />

          <Label> Send Invitation Link By Mail </Label>
          <Flex justifyCenter>
            <InviteTextField placeholder="Email Address" />
          </Flex>

          <br />

          <Flex justifyCenter>
            <Button> Invite </Button>
          </Flex>
        </ModalBody>
      </Modal>

      <Flex justifyBetween>
        <div>
          <Flex>
            <Image
              src={require("./sample.png")}
              style={{ height: "120px", paddingRight: "15px" }}
            />

            <Details>
              <Flex column>
                <h3> Fundry </h3>
                <a href="https://fundry.netlify.com"> Fundry website </a>
                <p> 11, Menlo Park , California </p>
                <p> helpdesk.remotify@gmail.com </p>
              </Flex>
            </Details>
          </Flex>
        </div>

        <div style={{ paddingRight: "10px" }}>
          <Flex column>
            <h4> 35 workers </h4>
            <h4> 12 Departments </h4>

            <Hover style={{ textAlign: "right" }}>
              <IoMdPersonAdd style={{ fontSize: "2em" }} />
            </Hover>
          </Flex>
        </div>
      </Flex>
      <hr />
    </Body>
  );
};

export default ProfileInfo;
