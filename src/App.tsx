import { useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/themes";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "./utils/context";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  function toggleTheme() {
    setUseDarkTheme(prevTheme => !prevTheme);
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <GlobalContext>
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} useDarkTheme={useDarkTheme} />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </GlobalContext>
    </ThemeProvider>
    
  )
}

export default App
