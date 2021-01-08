import React, {
  useContext,
  useCallback,
  useState,
  useRef,
  useEffect
} from "react";
import styled from "styled-components";
import { Button, Input } from "@material-ui/core";
import Post from "../Post";
import Comment from "../Comment";
import Modal from "../Modal";
import NewPost from "../NewPost";
import { togglePost, newComment } from "../../Store/actions";
import InlineWrapper from "../../StyledComponents/InlineWrapper";
import { StoreContext } from "../../Store";
import { defaultUserPic } from "../../utils/constants";

const PostsTable = () => {
  const [commentText, setCommentText] = useState("");
  const [state, dispatch] = useContext(StoreContext);
  const {
    posts,
    comments,
    settings: { currentPostID }
  } = state;

  const tglPost = useCallback((id) => togglePost(dispatch, id), [dispatch]);

  const addNewComment = useCallback(() => {
    newComment(dispatch, {
      id: comments.length + 1,
      postId: currentPostID,
      userPic: defaultUserPic,
      text: commentText
    });
    setCommentText("");
  }, [dispatch, commentText, comments.length, currentPostID]);

  const onChange = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  const buttonStyles = {
    "max-height": "40px",
    margin: "10px 0",
    color: "red !important"
  };

  const commentList = useRef(null);

  useEffect(() => {
    commentList.current.scrollTop =
      commentList.current.scrollHeight - commentList.current.clientHeight * 1.6;
  }, [currentPostID, comments.length]);

  return (
    <InlineWrapper>
      <PostsList>
        {posts.map(({ title, id }) => (
          <Post
            key={id}
            title={title}
            color="primary"
            onClick={() => tglPost(id)}
            variant={`${currentPostID === id ? "contained" : "outlined"}`}
          />
        ))}
        <Modal modalButtonText="add new post" buttonstyles={buttonStyles}>
          <NewPost />
        </Modal>
      </PostsList>
      <CommentsLists ref={commentList}>
        {comments.map(
          ({ text, id, postId }) =>
            postId === currentPostID && (
              <Comment key={id} text={text} postId={postId} />
            )
        )}
        <InlineWrapper>
          <CommentText onChange={onChange} value={commentText} />
          <AddNewComment onClick={addNewComment}>Add new Comment</AddNewComment>
        </InlineWrapper>
      </CommentsLists>
    </InlineWrapper>
  );
};

export default PostsTable;

const PostsList = styled.div`
  display: grid;
  grid-auto-rows: min-content;
  background-color: rgba(0, 0, 0, 0.3);
  height: 80vh;
  border-radius: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 20px;
  margin: 10px;
  box-shadow: 6px 6px 10px 0px;
`;

const CommentsLists = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 70%;
  height: 80vh;
  border-radius: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: no-wrap;
  padding: 20px;
  margin: 10px;
  box-shadow: 6px 6px 10px 0px;
`;

const AddPostButton = styled(Button)`
  height: 50px;
`;

const AddNewComment = styled(AddPostButton)`
  width: 30%;
  color: red !important;
`;

const CommentText = styled(Input)`
  width: 100%;
  height: 50px;
`;
