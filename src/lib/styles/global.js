import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const { charcoal, porcelain } = theme.colors;
const { primaryFont, accentFont } = theme.fontFamilies;

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${primaryFont};
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale
  }
  body {
    background-color: ${porcelain};
    font-weight: 400;
    color: ${charcoal};
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5, h6, button {
    font-family: ${accentFont};
  }
  a, button, select {
    cursor: pointer;
  }
`;

export default GlobalStyle;
