import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "@/pages/_app";

const UpVote = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <button onClick={() => store.increaseCount()}>+ Up Vote</button>
  ));
};

export default UpVote;
