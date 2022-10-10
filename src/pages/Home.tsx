import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { Countries } from "../components/Countries";
import { NoDataText } from "../components/NoDataText";
import { Actions } from "../components/Actions";
import { Navbar } from "../components/Navbar";
import { defaultTheme, darkTheme } from "../utils/themes";
import UseDarkThemeContext from "../utils/context/theme";
import { GlobalStyles } from "../GlobalStyles";
import DataContext from "../utils/context/data";
import { ThemeProvider } from "styled-components";

export function Home() {
  const { data, setData, manageableData, setManageableData } = useContext(DataContext);
  const { useDarkTheme } = useContext(UseDarkThemeContext);

  const [regionSelected, setRegionSelected] = useState<string>();
  const [countryToFilter, setCountryToFilter] = useState<string>("");

  const regionOptions = ["World", "Americas", "Africa", "Asia", "Europe", "Oceania"];

  function filterByName() {
    const filteredData = data?.filter(country => 
      country.name.common.toLowerCase() === countryToFilter.toLowerCase()
    );

    countryToFilter === "" ? filterByRegion() : setManageableData(filteredData);
  }

  function filterByRegion() {
    const filteredData = data?.filter(country => 
      country.region === regionSelected
    );

    regionSelected === "World" || regionSelected === undefined ? 
      setManageableData(data) : setManageableData(filteredData);
  }

  useEffect(() => {
    filterByRegion();
  }, [regionSelected])

  async function fetchData() {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setData(res.data)
      setManageableData(res.data);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(manageableData !== data) {
      fetchData();
    }
  }, []);

  return (
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <GlobalStyles />
        <Navbar />
        <Actions
          setCountry={setCountryToFilter}
          setRegion={setRegionSelected}
          filterByName={filterByName}
          regionOptions={regionOptions}
        />
        {
          manageableData && manageableData[0]?.name.common != "" ?
            <Countries data={manageableData} />
            :
            <NoDataText />
        }
      </ThemeProvider>
  )
}
