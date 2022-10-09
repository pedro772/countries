import { useContext } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./utils/themes";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import UseDarkThemeContext from "./utils/context/theme";
import { GlobalContext } from "./utils/context";

function App() {
  const { useDarkTheme } = useContext(UseDarkThemeContext);

  return (
    <GlobalContext>
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContext>
  )
}

export default App
