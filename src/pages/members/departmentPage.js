import React, { useState } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Image, Modal } from "react-bootstrap";
import posed from "react-pose";
import { inject, observer } from "mobx-react";

import Team from "./Team";
import { Header } from "../../components/";

const DepartmentPage = props => {
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
  `;

  const Body = styled.div`
    padding: 0.7;
  `;

  const autoGrid = (minColumnWidth = 150, gridGap = 0) => ({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap
  });

  const Images = styled.div({
    ...autoGrid(80, 7),
    paddingLeft: "0.75em",
    paddingRight: "0.75em",
    textAlign: "center",
    alignContent: "center"
  });

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

  const Data = [
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" }
  ];

  const Detail = styled.p({ textAlign: "center", fontSize: "1.2em" });
  const [TeamModal, setTeamModal] = useState(false);

  const { showTeam, openTeam, closeTeam } = props.DepartmentStore;

  return (
    <div>
      <Header name="Department | Engineering" />

      <Body>
        <Team show={showTeam} close={closeTeam} />

        <Detail> Fundry Engineering arm responsible for development. </Detail>

        <Images>
          {Data.map(({ i }) => {
            return (
              <div>
                <Bounce key={i}>
                  <Image
                    src={require("./sample.png")}
                    style={{ height: "60px" }}
                    roundedCircle
                  />
                </Bounce>
              </div>
            );
          })}
        </Images>
        <hr />

        <Flex>
          <Button
            onClick={() => {
              openTeam();
            }}
          >
            FrontEnd Team
          </Button>

          <Button
            onClick={() => {
              openTeam();
            }}
          >
            Backend Team
          </Button>
        </Flex>
      </Body>
    </div>
  );
};

export default inject("DepartmentStore")(observer(DepartmentPage));
