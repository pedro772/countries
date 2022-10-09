import { DataContextProvider } from "./data";
import { UseDarkThemeContextProvider } from "./theme";
import { combineContexts } from "./combineContexts";

const providers = [
  DataContextProvider,
  UseDarkThemeContextProvider
]

export const GlobalContext = combineContexts(...providers);