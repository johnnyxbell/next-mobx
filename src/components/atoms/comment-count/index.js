import React, { useContext } from "react";
import { StoreContext } from "@/pages/_app";
import { useObserver } from "mobx-react-lite";

const CommentCount = () => {
  const store = useContext(StoreContext);
  return useObserver(() => <div>{`${store.commentsCount} Comments`}</div>);
};

export default CommentCount;
