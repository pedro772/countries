import { useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DetailedCountry } from "../components/DetailedCountry";
import { NoDataText } from "../components/NoDataText";
import { Navbar } from "../components/Navbar";
import { ReturnButton } from "../components/ReturnButton";
import DataContext from "../utils/context/data";
import { defaultTheme, darkTheme } from "../utils/themes";
import UseDarkThemeContext from "../utils/context/theme";
import { GlobalStyles } from "../GlobalStyles";

export function Details() {
  const { data, manageableData } = useContext(DataContext);
  const { useDarkTheme } = useContext(UseDarkThemeContext);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <GlobalStyles />
      <Navbar />
      <ReturnButton />
      {
        manageableData && manageableData[0]?.name.common != "" ?
          <DetailedCountry
            borders={manageableData[0].borders}
            cca3={manageableData[0].cca3}
            currencies={manageableData[0].currencies}
            flags={manageableData[0].flags}
            languages={manageableData[0].languages}
            name={manageableData[0].name}
            population={manageableData[0].population}
            region={manageableData[0].region}
            subregion={manageableData[0].region}
            tld={manageableData[0].tld}
            capital={manageableData[0].capital}
            data={data}
          />
          :
          <NoDataText />
      }
    </ThemeProvider>
  )
}
