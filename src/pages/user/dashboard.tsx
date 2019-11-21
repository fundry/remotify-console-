import React, { useState, useRef } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { useMutation } from "@apollo/react-hooks";
import { Link as NavLink } from "react-router-dom";
import { MdShowChart } from "react-icons/md";

import Charts from "./chart";
import { Header } from "../../components/";
import Department from "./details/departments";

const Dashboard = (): JSX.Element => {
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

  const Hover = styled.div({
    cursor: "pointer"
  });

  const Details = styled.div`
    padding-left: 2.5em;
    padding-right: 2.5em;
  `;

  const Sidebar = styled.div`
    position: fixed;
    background: #ccc;
    height: 100vh;
    padding-top: 0em;
  `;

  const NavLinks = styled.ul`
    list-style: none;
    padding: 0;
    color: #000;
  `;

  const Link = styled.li`
    display: block;
    padding: 0.8em;
    color: black;
    text-decoration: none;
  `;

  const Profile = styled.div`
    padding: 1em;
  `;

  const [Create, setCreate] = useState<Boolean>(false);
  const [Chart, setChart] = useState<Boolean>(false);
  const [Error, setError] = useState<Boolean>(false);

  const createButton = () => {
    setCreate(false);
  };

  const refDepartment = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Header />

      <div>
        <Details>
          <Flex justifyBetween>
            <Flex column>
              <NavLink to="/profile">
                <h3> Fundry </h3>
              </NavLink>
            </Flex>
          </Flex>
        </Details>

        <h4 style={{ textAlign: "center" }}> {Error} </h4>
        {/* DEPARTMENT AND CHART BOARD CONTROLLER   */}
        <div>
          {!Chart ? (
            <Department />
          ) : (
            <div>
              <Charts />
            </div>
          )}
        </div>
        <br />
      </div>

      {/*  END OF CONTROLLER */}
    </div>
  );
};

export default Dashboard;
