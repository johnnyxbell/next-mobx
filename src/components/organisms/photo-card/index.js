import React from "react";
import VoteCounter from "@/components/molecule/vote-counter";
import Comments from "@/components/molecule/comments";

const PhotoCard = () => {
  return (
    <>
      <VoteCounter />
      <Comments />
    </>
  );
};

export default PhotoCard;
