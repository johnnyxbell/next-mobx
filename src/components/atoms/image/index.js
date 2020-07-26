import React, { useEffect } from "react";
import imageStore from "@/stores/image-store";
import { useObserver } from "mobx-react";

const Image = () => {
  useEffect(() => {
    imageStore.fetchImage();
  }, []);

  return useObserver(() => (
    <>
      {imageStore.imageUrl ? (
        <img src={imageStore.imageUrl} alt="Random Image of Pug" />
      ) : (
        <div>Loading Image...</div>
      )}
    </>
  ));
};

export default Image;
