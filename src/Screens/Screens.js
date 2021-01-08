import React, { useContext } from "react";
import PropTypes from "prop-types";
import PostsList from "../Components/PostsTable";
import { StoreContext } from "../Store";

const screensDictionary = {
  PostsList: <PostsList />
};

const Screens = () => {
  const [state] = useContext(StoreContext);
  const {
    settings: { currentScreen }
  } = state;

  return <>{screensDictionary[currentScreen]}</>;
};

Screens.propTypes = {
  currentScreen: PropTypes.string
};

Screens.defaultProps = {
  currentScreen: "PostsList"
};

export default Screens;
