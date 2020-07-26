import React from "react";
import VoteCounter from "@/components/molecule/vote-counter";
import Comments from "@/components/molecule/comments";
import ImagePanel from "@/components/molecule/image-panel";

const PhotoCard = () => {
  return (
    <>
      <ImagePanel />
      <VoteCounter />
      <Comments />
    </>
  );
};

export default PhotoCard;
