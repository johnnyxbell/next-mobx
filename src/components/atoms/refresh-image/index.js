import React from "react";
import imageStore from "@/stores/image-store";
import { useObserver } from "mobx-react";

const RefreshImage = () => {
  return useObserver(() => (
    <button onClick={() => imageStore.fetchImage()}>Refresh Image</button>
  ));
};

export default RefreshImage;
