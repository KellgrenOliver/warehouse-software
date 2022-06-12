import React from "react";
import styled from "@emotion/styled";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Icon = styled(FontAwesomeIcon)({
  fontSize: "2rem",
  color: "white",
  position: "absolute",
  top: 15,
  left: 15,
  cursor: "pointer",
});

const BackArrow = ({ url }) => {
  const navigate = useNavigate();
  return <Icon icon={faArrowLeft} onClick={() => navigate(`${url}`)} />;
};

export default BackArrow;
