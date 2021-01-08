import {
  addPost,
  removePost,
  tglPost,
  changeScreen,
  addComment,
  tglModal
} from "./types";

import styleConsoleLog from "../utils/styleConsoleLog";

export default (state, { type, payload = {} }) => {
  const dictionary = {
    // POSTS REDUCERS
    [addPost]: {
      ...state,
      posts: [...state.posts, payload]
    },

    [removePost]: {
      ...state,
      posts: [...state.posts.filter(({ id }) => !id)]
    },

    [tglPost]: {
      ...state,
      settings: { ...state.settings, currentPostID: payload }
    },

    // SCREENS REDUCERS
    [changeScreen]: {
      ...state,
      settings: { ...state.settings, currentScreen: payload }
    },

    // COMMENTS REDUCERS
    [addComment]: {
      ...state,
      comments: [...state.comments, payload]
    },

    // MODALS REDUCERS
    [tglModal]: {
      ...state,
      modal: {
        ...state.modal,
        isOpen: payload
      }
    },

    default: state
  };

  // Context API Logger in Dev mode.
  styleConsoleLog(
    type,
    "color: green; font-weight: 800; padding: 0; font-size: 18px;"
  );

  console.log(state);

  return dictionary[type] || dictionary.default;
};
