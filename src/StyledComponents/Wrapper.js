import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Wrapper = ({ children }) => <Component>{children}</Component>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

const Component = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

export default Wrapper;
