import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./reducer";
import { posts, settings, comments } from "../utils/data";

const initialState = {
  settings,
  posts,
  comments,
  modal: {
    isOpen: false
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.node.isRequired
};

export const StoreContext = createContext(initialState);
export default Store;
