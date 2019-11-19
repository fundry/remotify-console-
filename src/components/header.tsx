import React, { useState, useRef } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { useMutation } from "@apollo/react-hooks";

import { MdShowChart } from "react-icons/md";

import { CreateTeam } from "../data/mutations";

const Header = (): JSX.Element => {
  const Head = styled.div({
    padding: "0.5em",
    width: "100%",
    background: "#361f94",
    color: "white"
  });

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

  const [createDepartment, { loading }] = useMutation(CreateTeam);

  const refDepartment = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Header />

      <div>
        <Head
          style={{
            boxShadow: "0px 3px 5px grey"
          }}
        >
          <Flex justifyBetween>
            {!Create ? (
              <Button onClick={() => setCreate(true)}>
                <p>Create Department </p>
              </Button>
            ) : (
              <div>
                <Flex>
                  <input
                    style={{
                      background: "transparent",
                      color: "white",
                      border: "0.7px solid white ",
                      padding: "0.5em",
                      paddingLeft: "2em",
                      width: "20em"
                    }}
                    ref={refDepartment}
                    placeholder="Department Name"
                  />

                  <Button
                    onClick={() => {
                      createButton();
                      createDepartment({
                        variables: {
                          name: refDepartment.current.value
                        }
                      });
                    }}
                  >
                    Create
                  </Button>
                </Flex>
              </div>
            )}

            <p> Departments / Profile </p>

            <div>
              {!Chart ? (
                <Hover
                  onClick={() => {
                    setChart(true);
                  }}
                >
                  <MdShowChart style={{ fontSize: "2em" }} />
                </Hover>
              ) : (
                <Hover
                  onClick={() => {
                    setChart(false);
                  }}
                >
                  <p> Board View </p>
                </Hover>
              )}
            </div>
          </Flex>
        </Head>
        <br />
      </div>
    </div>
  );
};

export default Header;
