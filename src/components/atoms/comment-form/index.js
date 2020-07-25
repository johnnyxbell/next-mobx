import React, { useContext, useState } from "react";
import { StoreContext } from "@/pages/_app";
import { useObserver } from "mobx-react";

const CommentForm = () => {
  const [comment, setComment] = useState("");
  const store = useContext(StoreContext);
  return useObserver(() => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        store.addComment(comment);
        setComment("");
      }}
    >
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button disabled={!comment} type="submit">
        Add Comment
      </button>
    </form>
  ));
};

export default CommentForm;
