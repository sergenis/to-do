import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Post = ({ title, onClick }) => {
  const Res = useMemo(() => <Component onClick={onClick}>{title}</Component>, [
    onClick,
    title
  ]);
  return Res;
};

Post.propTypes = {
  title: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const Component = styled(Button)`
  max-height: 40px;
  margin: 10px 0;
`;

export default Post;
