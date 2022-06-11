import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

const Container = styled.div(({ isScrolling }) => {
  return {
    display: "flex",
    position: "fixed",
    top: 0,
    zIndex: 3,
    alignItems: "center",
    width: "100%",
    height: "60px",
    transition: "background 0.5s ease-in",
    backgroundColor: isScrolling ? "#323a4d" : "transparent",
  };
});

const LinkWrapper = styled.div({
  margin: "1rem 5rem",
  marginLeft: "auto",
  display: "flex",
});

const NavItem = styled.div({
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.3)",
  },
});

const Home = styled.div({
  marginRight: "auto",
  fontSize: "2rem",
  fontWeight: 200,
});

const Link = styled.a({
  margin: "0rem 1.5rem",
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
  letterSpacing: "1px",
});

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const [id, setId] = useState("");

  window.onscroll = () => {
    if (window.scrollY > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      setTop(element.offsetTop - 70);
      setLeft(element.offsetLeft);
    }
    window.scrollTo({
      top,
      left,
      behavior: "smooth",
    });
  }, [id, top, left]);

  return (
    <Container isScrolling={isScrolling}>
      <Link
        onClick={() => {
          setId("");
          setTop(0);
          setLeft(0);
          window.scrollTo(0, 0);
        }}
      >
        <Home>Warehouse Software</Home>
      </Link>
      <LinkWrapper>
        <Link
          onClick={() => {
            setId("about");
            if (id === "about") {
              setId("");
            }
          }}
        >
          <NavItem>About</NavItem>
        </Link>
        <Link
          onClick={() => {
            setId("skills");
            if (id === "skills") {
              setId("");
            }
          }}
        >
          <NavItem>Skills</NavItem>
        </Link>
        <Link
          onClick={() => {
            setId("education");
            if (id === "education") {
              setId("");
            }
          }}
        >
          <NavItem>Education</NavItem>
        </Link>
        <Link
          onClick={() => {
            setId("projectexperiance");
            if (id === "projectexperiance") {
              setId("");
            }
          }}
        >
          <NavItem>Project Experiance</NavItem>
        </Link>
        <Link
          onClick={() => {
            setId("languages");
            if (id === "languages") {
              setId("");
            }
          }}
        >
          <NavItem>Languages</NavItem>
        </Link>
        <Link
          onClick={() => {
            setId("contact");
            if (id === "contact") {
              setId("");
            }
          }}
        >
          <NavItem>Contact</NavItem>
        </Link>
      </LinkWrapper>
    </Container>
  );
};

export default Navbar;
