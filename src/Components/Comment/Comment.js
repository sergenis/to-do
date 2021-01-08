import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Comment = ({ text }) => {
  const Res = useMemo(() => <Component>{text}</Component>, [text]);
  return Res;
};

Comment.propTypes = {
  text: PropTypes.string.isRequired
};

const Component = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  margin: 10px;
  padding: 20px 10px;
  width: 90%;
  overflow-y: auto;
`;

export default Comment;
