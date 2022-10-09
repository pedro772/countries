import { createGlobalStyle } from "styled-components";

type ThemeType = {
  backgroundColor: string;
}

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Nunito Sans", sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;