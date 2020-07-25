import React, { useContext } from "react";
import { StoreContext } from "@/pages/_app";
import { useObserver } from "mobx-react";

const Counter = () => {
  const store = useContext(StoreContext);

  return useObserver(() => <p>{store.likesCount}</p>);
};

export default Counter;
