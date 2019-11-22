import React, { useState, useRef } from "react";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { useMutation } from "@apollo/react-hooks";
import media from "styled-media-query";
import { MdShowChart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

import { CreateTeam } from "../data/mutations";
import useWindowWidth from "../hooks_style";

interface CustomProps {
  DoubleHeader: Boolean;
}

const Header = ({ DoubleHeader }: CustomProps): JSX.Element => {
  const Head = styled.div({
    padding: "0.5em",
    width: "100%",
    background: "#361f94",
    paddingTop: "15px",
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
    ${media.lessThan("small")`
    padding: 0.15em 1em;
    margin: 0 0.25em;
    `};
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

  const Profile = styled.div`
    padding: 1em;
  `;

  const Input = styled.input`
    background: transparent
    color: #fff
    border: 0.7px solid white
    padding: 0.5em
    padding-left: "2em
    width: 20em
    ${media.lessThan("small")`
     width : 18em
  `};
  `;

  const Header = styled.div`
    padding-left: 1em
    padding-right: 1em
    padding: 0.5em
    width: 100%
    background: #6C29D9
    color: white
  `;

  const OrgName = styled.h3`
    ${media.lessThan("medium")`
     font-size : 1.6em
    `};
    ${media.lessThan("small")`
    font-weight : normal
     width : 1.2em
    `};
  `;

  const [Create, setCreate] = useState<Boolean>(false);
  const [Chart, setChart] = useState<Boolean>(false);
  const [Error, setError] = useState<Boolean>(false);

  const createButton = () => {
    setCreate(false);
  };

  const [createDepartment, { loading }] = useMutation(CreateTeam);

  const refDepartment = useRef<HTMLInputElement>(null);

  const hooks = useWindowWidth();

  return (
    <div>
      <Header style={{ boxShadow: !DoubleHeader ? "0px 3px 5px grey" : "0px" }}>
        <Flex justifyBetween>
          <OrgName>
            {" "}
            <a href="https://remotify.netlify.com"> R </a>{" "}
          </OrgName>

          <Link to="/profile">
            <FiUser style={{ fontSize: "2em" }} />
          </Link>
        </Flex>
      </Header>
      {DoubleHeader ? (
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
                  <Input ref={refDepartment} placeholder="Department Name" />

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

            {hooks >= 450 ? <p> Departments / Profile </p> : null}

            {!Create ? (
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
            ) : null}
          </Flex>{" "}
          <br />
        </Head>
      ) : null}
    </div>
  );
};

export default Header;
