import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Nunito Sans", sans-serif;
    background-color: ${
      props => props.theme === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"
    };
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;