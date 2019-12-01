import React, { useState, useRef } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Formik } from "formik";
import * as Yup from "yup";
import { IoIosArrowRoundForward, IoIosWarning } from "react-icons/io";
import Flex from "styled-flex-component";

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

const Error = styled.p`
    padding-right : 5px
    padding-top : 4px
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

const MagicAuthForm = (): JSX.Element => {
  const [Accept, setAccept] = useState<boolean>(false);

  const NameInput = useRef<HTMLInputElement>();

  const CardBody = styled.div`
    padding: 0.5em;
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

  return (
    <Formik
      initialValues={{ name: "", password: "" }}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({ isSubmitting, handleChange, handleBlur, values, errors }) => (
        <form>
          <div>
            <label htmlFor="name" />
            <Input
              id="name"
              type="text"
              placeholder="Office Name"
              ref={NameInput}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            {errors ? (
              <Flex>
                <IoIosWarning style={{ fontSize: "1.5em", color: "red" }} />
                <Error> {errors.name} </Error>
              </Flex>
            ) : null}
          </div>

          <div>
            <label htmlFor="password" />
            <Input
              id="password"
              type="password"
              placeholder="Office Password"
              ref={NameInput}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />

            {errors ? (
              <Flex>
                <IoIosWarning style={{ fontSize: "1.5em", color: "red" }} />
                <Error> {errors.name} </Error>
              </Flex>
            ) : null}
          </div>

          <br />

          <Flex justifyCenter>
            <Button> Set Passcode </Button>
          </Flex>
        </form>
      )}
    </Formik>
  );
};

export default MagicAuthForm;
