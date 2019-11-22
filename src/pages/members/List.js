import React, { useState } from "react";
import Flex from "styled-flex-component";
import styled from "styled-components";
import { Image } from "react-bootstrap";
import posed from "react-pose";
import { IoMdSettings, IoMdClose, IoMdSearch } from "react-icons/io";
import media from "styled-media-query";

import useWindowWidth from "../../hooks_style";

const List = () => {
  const hooks = useWindowWidth();

  const autoGrid = (minColumnWidth = 150, gridGap = 0) => ({
    display: "grid",
    textAlign: "center",
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap
  });

  const Images = styled.div({
    ...autoGrid(80, 7),
    paddingLeft: "0.75em",
    paddingRight: "0.75em",
    justifyContent: "center",
    alignContent: "center"
  });

  const Data = [
    { name: "Mane Mane" },
    { name: "Tane Tane" },
    { name: "Rane  Rane" },
    { name: "Fane Fane" },
    { name: "Gane Gane" },
    { name: "Vane Vane" },
    { name: "Dane Dane" },
    { name: "Nane Nane" },
    { name: "Wane Nane" },
    { name: "Zane Zane" }
  ];

  const Bounce = posed.div({
    hoverable: true,
    init: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      textAlign: "center"
    },
    hover: {
      scale: 1.1
    },
    press: {
      scale: 1.1,
      boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
    }
  });

  const Input = styled.input({
    width: "25em",
    height: "5vh",
    border: "0px",
    borderRadius: "0px",
    paddingLeft: "10px",
    marginBottom: "15px"
  });

  const Box = styled.div({
    width: "28em",
    height: "6.5vh",
    border: "1px solid #000",
    borderRadius: "5px",
    padding: "0.5em"
  });

  const Body = styled.div`
    padding: 0.7em;
  `;

  const Hover = styled.div`
    cursor: pointer;
  `;

  const Name = styled.p`
    font-size : 1.1em
    padding-left : 20px
    padding-top : 15px
    word-spacing : 1em
  `;

  const DeptName = styled.h3`
    padding-left: 17px
    padding-top: 10px
  ${media.lessThan("medium")`
   font-size: 1.2em
   padding-left: 14px
  `};
  `;

  const [Search, SetSearch] = useState(false);
  const [SmallSearch, SetSmallSearch] = useState(false);

  return (
    <Body>
      <Body>
        <Flex justifyBetween>
          {!SmallSearch ? <DeptName>Engineering</DeptName> : null}

          {hooks >= 650 ? (
            <Box>
              <Flex justifyBetween>
                <Hover style={{ paddingTop: "7px", paddingLeft: "7px" }}>
                  <IoMdSearch style={{ fontSize: "1.8em" }} />
                </Hover>
                <Input placeholder="Search Worker Name" />
              </Flex>
            </Box>
          ) : (
            <div>
              {!SmallSearch ? (
                <Hover style={{ paddingRight: "10px" }}>
                  <IoMdSearch
                    style={{ fontSize: "1.5em" }}
                    onClick={() => {
                      SetSmallSearch(true);
                    }}
                  />
                </Hover>
              ) : (
                <Box
                  style={{
                    width: "25em",
                    height: "5vh",
                    padding: "0.1em"
                  }}
                >
                  <Flex justifyBetween>
                    <Hover style={{ paddingTop: "7px", paddingLeft: "7px" }}>
                      <IoMdClose
                        style={{ fontSize: "1.8em" }}
                        onClick={() => {
                          SetSmallSearch(false);
                        }}
                      />
                    </Hover>
                    <Input
                      placeholder="Search Worker Name"
                      style={{
                        width: "23em",
                        height: "4vh"
                      }}
                    />
                  </Flex>
                </Box>
              )}
            </div>
          )}
        </Flex>

        <hr />
        <div>
          {Data.map(({ i, name }) => {
            return (
              <Body>
                <Flex justifyBetween>
                  <Flex>
                    <Image
                      src={require("./sample.png")}
                      style={{ height: "50px" }}
                      roundedCircle
                    />

                    <Name> {name} </Name>
                  </Flex>

                  <Flex>
                    <Hover>
                      <IoMdSettings style={{ fontSize: "1.5em" }} />
                    </Hover>

                    <Hover style={{ paddingLeft: "15px" }}>
                      <IoMdSettings style={{ fontSize: "1.5em" }} />
                    </Hover>

                    <Hover style={{ paddingLeft: "15px" }}>
                      <IoMdSettings style={{ fontSize: "1.5em" }} />
                    </Hover>
                  </Flex>
                </Flex>
              </Body>
            );
          })}
        </div>
        <br />
      </Body>

      <Body>
        <h5 style={{ textAlign: "left", paddingLeft: "17px" }}>Engineering </h5>
        <hr />
        <Images>
          {Data.map(({ i }) => {
            return (
              <div>
                <Bounce key={i}>
                  <Image
                    src={require("./sample.png")}
                    style={{ height: "77px" }}
                    roundedCircle
                  />
                </Bounce>
              </div>
            );
          })}
        </Images>{" "}
      </Body>
      <Body>
        <h5 style={{ textAlign: "left", paddingLeft: "17px" }}>Engineering </h5>
        <hr />
        <Images>
          {Data.map(({ i }) => {
            return (
              <div>
                <Bounce key={i}>
                  <Image
                    src={require("./sample.png")}
                    style={{ height: "77px" }}
                    roundedCircle
                  />
                </Bounce>
              </div>
            );
          })}
        </Images>{" "}
      </Body>
      <Body>
        <h5 style={{ textAlign: "left", paddingLeft: "17px" }}>
          {" "}
          Engineering{" "}
        </h5>
        <hr />
        <Images>
          {Data.map(({ i }) => {
            return (
              <div>
                <Bounce key={i}>
                  <Image
                    src={require("./sample.png")}
                    style={{ height: "77px" }}
                    roundedCircle
                  />
                </Bounce>
              </div>
            );
          })}
        </Images>{" "}
      </Body>
    </Body>
  );
};

export default List;
