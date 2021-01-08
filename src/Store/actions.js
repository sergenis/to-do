import {
  addPost,
  removePost,
  tglPost,
  addComment,
  changeScreen,
  tglModal
} from "./types";

export const toggleScreen = (dispatch, screen) =>
  dispatch({
    type: changeScreen,
    payload: screen
  });

export const newPost = (dispatch, postObj) =>
  dispatch({
    type: addPost,
    payload: postObj
  });

export const deletePost = (dispatch, postId) =>
  dispatch({
    type: removePost,
    payload: postId
  });

export const togglePost = (dispatch, postId) =>
  dispatch({
    type: tglPost,
    payload: postId
  });

export const newComment = (dispatch, commentObj) =>
  dispatch({
    type: addComment,
    payload: commentObj
  });

export const toggleModal = (dispatch, isOpen) =>
  dispatch({ type: tglModal, payload: isOpen });
