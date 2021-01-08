import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components";
import { newPost, toggleModal } from "../../Store/actions";
import { StoreContext } from "../../Store";
import InlineWrapper from "../../StyledComponents/InlineWrapper";
import Wrapper from "../../StyledComponents/Wrapper";
import SendIcon from "@material-ui/icons/Send";

const PostsTable = () => {
  const [title, setTitle] = useState("");
  const [state, dispatch] = useContext(StoreContext);
  const { posts } = state;

  const createNewPost = useCallback(() => {
    newPost(dispatch, { title, id: posts.length + 1, commentsCount: 0 });
    toggleModal(dispatch, false);
  }, [dispatch, posts.length, title]);

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Wrapper>
      <Text>What's topic you wanna create?</Text>
      <InlineWrapper>
        <Title onChange={onChange} />
        <SubmitBtn onClick={createNewPost}>
          <SvgWrapper>
            <SendIcon />
          </SvgWrapper>
        </SubmitBtn>
      </InlineWrapper>
    </Wrapper>
  );
};

export default PostsTable;

const Title = styled("input")`
  width: 70%;
`;

const SubmitBtn = styled("button")`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  position: relative;
`;

const SvgWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 6px;
  right: 0px;
`;

const Text = styled.span`
  margin: 20px 10px;
  text-align: center;
`;
