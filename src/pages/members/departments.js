import React, { useState, useRef } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import posed from "react-pose";
import { FiX } from "react-icons/fi";
import { useQuery } from "@apollo/react-hooks";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

// import { FetchDepartment } from '../../../data/queries';

const autoGrid = (minColumnWidth = 200, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap
});

const Cards = styled.div({
  ...autoGrid(220, 20),
  padding: "3em",
  marginLeft: "1.5em"
});

const Card = styled.div({
  height: "20vh",
  padding: "1em",
  paddingTop: "2.5em",
  width: "15em",
  borderRadius: "10px",
  boxShadow: "0px 4px 6px grey",
  background: "black",
  color: "white",
  cursor: "pointer"
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

const ModalHead = styled.div({
  background: "black",
  padding: "0.5em",
  color: "#fff"
});

const ModalBody = styled.div({
  padding: "0.5em"
});

const Hover = styled.div({
  cursor: "pointer"
});

const Department = props => {
  const [teamModal, setteamModal] = useState(false);
  const [Error, setError] = useState(false);

  // const [department] = useQuery(FetchDepartment);

  const data = [
    { i: 1, name: "wane" },
    { i: 2, name: "tane" },
    { i: 3, name: "cane" },
    { i: 4, name: "wane" },
    { i: 5, name: "tane" },
    { i: 6, name: "cane" }
  ];

  console.log(props);

  return (
    <div>
      <Cards>
        {data.map(({ i, name }) => {
          return (
            <Link to={`/members/${i}`}>
              <Card key={i}>
                <div style={{ textAlign: "center" }}>
                  <h5> {name}</h5>
                  <p> 5 members </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </Cards>
      <br />
    </div>
  );
};

export default inject("DepartmentStore")(observer(Department));
