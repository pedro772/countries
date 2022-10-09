import  { DataContextProvider } from "./data";

// @ts-ignore
const GlobalContext = ({ children }) => {
  return <DataContextProvider>{children}</DataContextProvider>
}

export default GlobalContext;