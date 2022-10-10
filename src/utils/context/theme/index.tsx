import { createContext, useState } from "react";

type PropsUseDarkTheme = {
  useDarkTheme: boolean
  setUseDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

const DEFAULT_VALUE = {
  useDarkTheme: false,
  setUseDarkTheme: () => {},
}

const UseDarkThemeContext = createContext<PropsUseDarkTheme>((DEFAULT_VALUE));

// @ts-ignore
const UseDarkThemeContextProvider = ({ children }) => {
  const [useDarkTheme, setUseDarkTheme] = useState(DEFAULT_VALUE.useDarkTheme);

  return (
    <UseDarkThemeContext.Provider
      value={{
        useDarkTheme,
        setUseDarkTheme
      }}
    >
      {children}
    </UseDarkThemeContext.Provider>
  );
}

export { UseDarkThemeContextProvider };
export default UseDarkThemeContext;