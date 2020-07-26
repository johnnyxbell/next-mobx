import React from "react";
import VoteCounter from "@/components/molecule/vote-counter";
import Comments from "@/components/molecule/comments";
import ImagePanel from "@/components/molecule/image-panel";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  margin: auto;
`;

const PhotoCard = () => {
  return (
    <Container>
      <ImagePanel />
      <VoteCounter />
      <Comments />
    </Container>
  );
};

export default PhotoCard;
