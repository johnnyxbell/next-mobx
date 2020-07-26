import React, { useEffect } from "react";
import imageStore from "@/stores/image-store";
import { useObserver } from "mobx-react";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #ccc;
  img {
    object-fit: cover;
    width: 350px;
    height: 350px;
    border-radius: 4px;
  }
`;

const Image = () => {
  useEffect(() => {
    imageStore.fetchImage();
  }, []);

  return useObserver(() => (
    <Container>
      {imageStore.imageUrl ? (
        <img src={imageStore.imageUrl} alt="Random Image of Pug" />
      ) : (
        <div>Loading Image...</div>
      )}
    </Container>
  ));
};

export default Image;
