import React, { useContext } from "react";
import { StoreContext } from "@/pages/_app";
import { useObserver } from "mobx-react";

const Comment = () => {
  const store = useContext(StoreContext);
  return useObserver(() => (
    <ul>
      {store.comments.map((comment, index) => {
        return <li key={index}>{comment}</li>;
      })}
    </ul>
  ));
};

export default Comment;
