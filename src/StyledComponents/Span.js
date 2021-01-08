import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Span = ({ text }) => <Component>{text}</Component>;

Span.propTypes = {
  text: PropTypes.string.isRequired
};

const Component = styled.span`
  font-size: 18px;
  color: 000;
  padding: 4px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default Span;
