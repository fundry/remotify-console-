import React, { useRef, useState } from "react";
import { Card, Spinner, Image } from "react-bootstrap";
import styled from "styled-components";
import Flex from "styled-flex-component";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward, IoIosWarning } from "react-icons/io";
import media from "styled-media-query";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/react-hooks";

import { LoginOrganization } from "../../data/mutations";

const Body = styled.div`
  padding: 1em;
`;

const MagicAuth = (): JSX.Element => {
  const CardHead = styled.div`
  padding : 1em
  color : #fff
  text-align : center
  background : blue
`;

  const CardBody = styled.div`
    padding: 0.5em;
  `;

  const Input = styled.input`
  height : 6vh
  width : 25em
  padding-left : 10px
  border: 1.1px solid #361f94
  font-size : 1.1em
  border-radius : 3px
  ${media.lessThan("small")`
   font-size: 1em
   width : 20em
`};
`;

  const Heading = styled.div`
  text-align : center
  padding-bottom : 15px
`;

  const Button = styled.button`
    background: #361f94;
    text-align: right;
    border-radius: 3px;
    height: 35px;
    border: 1px solid #0e2f5a;
    color: #fff;
    margin: 0 1em;
    padding: 0.25em 1.5em;
    font-size: 1em;
    &:hover {
      color: #0e2f5a;
      background: transparent;
    }
  `;

  const Text = styled.p`
    font-size: 1.2em;
    ${media.lessThan("small")`
     font-size: 1.05em
  `};
  `;

  const Error = styled.p`
    padding-right : 5px
    padding-top : 4px
  `;

  const Workspace = styled.p`
    font-size: 1.2em
    font-weight:  bold
    ${media.lessThan("small")`
     font-size: 1.1em
  `};
  `;

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(8, "Not less than 3")
      .max(24, "More than 25")
      .required("must have a name "),
    password: Yup.string()
      .max(37, "More than 25")
      .required("must have a password ")
  });

  const NameInput = useRef<HTMLInputElement>();
  const [Name, setName] = useState<Boolean>(false);
  const [Loading, setLoading] = useState<Boolean>(false);

  const [loginOrganization, { error, loading, data }] = useMutation(
    LoginOrganization,
    {
      ignoreResults: false,
      onCompleted: () => {
        console.log(data);
      },
      onError: error => {
        console.log(error, "an error ocurrred");
      }
    }
  );

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

  const Org = styled.h4`
    font-weight: normal
    text-align: center
    ${media.lessThan("small")`
      font-size: 1.4em
    `};
  `;

  const checkUser = () => {
    setLoading(true);

    setTimeout(() => {
      setName(true);
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <p> MagicAuth </p>
    </div>
  );
};

export default MagicAuth;
