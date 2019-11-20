import React from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Image, Tab, Tabs } from "react-bootstrap";
import { MdHistory } from "react-icons/md";

const List: Array<Object> = [{ name: "" }, { name: "" }, { name: "" }];

const profile = () => {
  const Body = styled.div`
    padding: 0.5em;
  `;
  const Details = styled.div`
    padding-top: 17px;
  `;

  return (
    <Body>
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

        {/*
        <div>
          {List.map(() => {
            return (
              <Image
                src={require('./sample2.png')}
                style={{
                  height: '100px',
                  paddingRight: '15px',
                  paddingTop: '30px',
                }}
              />
            );
          })}
        </div>
        */}
      </Flex>
      <hr />
    </Body>
  );
};

export default profile;
