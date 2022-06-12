import React from "react";
import styled from "@emotion/styled";

const H1 = styled.div({
  fontWeight: 200,
  fontSize: "2.5rem",
  marginBottom: "1rem",
  textAlign: "center",
  marginTop: "3rem",
  "@media screen and (min-width: 600px)": {
    fontSize: "3rem",
  },
  "@media screen and (min-width: 768px)": {
    marginTop: "20vh",
  },
});

const Header = (props) => {
  return <H1>{props.title}</H1>;
};

export default Header;
