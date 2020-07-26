import React from "react";
import Comment from "@/components/atoms/comment";
import CommentForm from "@/components/atoms/comment-form";
import CommentCount from "@/components/atoms/comment-count";

const Comments = () => {
  return (
    <>
      <CommentCount />
      <CommentForm />
      <Comment />
    </>
  );
};

export default Comments;
