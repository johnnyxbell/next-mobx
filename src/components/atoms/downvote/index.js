import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "@/pages/_app";

const DownVote = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <button onClick={() => store.decreaseCount()}>- Down Vote</button>
  ));
};

export default DownVote;
