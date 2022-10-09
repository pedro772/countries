import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalContext } from "./utils/context";

function App() {
  return (
    <GlobalContext>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </GlobalContext>
  )
}

export default App
