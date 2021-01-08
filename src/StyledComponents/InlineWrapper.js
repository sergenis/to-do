import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InlineWrapper = ({ children }) => <Component>{children}</Component>;

const Component = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

InlineWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default InlineWrapper;
