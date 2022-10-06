import axios from "axios"
import { useEffect, useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Countries } from "./components/Countries";
import { Navbar } from "./components/Navbar"
import { Actions } from "./components/Actions";
import { DetailedCountry } from "./components/DetailedCountry";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/themes";

interface CountryData {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      }
    }[];
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    }
  }[];
  languages: {
    [key: string]: string;
  }
  capital?: string[];
  borders: string[];
  cca3: string;
}

function App() {
  const [data, setData] = useState<CountryData[]>();
  const [manageableData, setManageableData] = useState<CountryData[]>();
  const [regionSelected, setRegionSelected] = useState<string>();
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [countryToFilter, setCountryToFilter] = useState<string>("");
  const [currentScreen, setCurrentScreen] = useState<string>("MENU");

  const regionOptions = ["World", "Americas", "Africa", "Asia", "Europe", "Oceania"];

  async function fetchData() {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setData(res.data)
      setManageableData(res.data);
      console.log(res.data)
    } catch(err) {
      console.log(err)
    }
  }

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
    fetchData();
  }, []);

  useEffect(() => {
    filterByRegion();
  }, [regionSelected])

  function toggleTheme() {
    setUseDarkTheme(prevTheme => !prevTheme);
  }

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <div>
        <GlobalStyles />
        <Navbar toggleTheme={toggleTheme} useDarkTheme={useDarkTheme} />
        <Actions
          setCountry={setCountryToFilter}
          setRegion={setRegionSelected}
          filterByName={filterByName}
          currentScreen={currentScreen}
          regionOptions={regionOptions}
          useDarkTheme={useDarkTheme}
        />
        {
          manageableData && manageableData.length > 0 && data?
            <>
              {/* <DetailedCountry
                borders={manageableData[0].borders}
                cca3={manageableData[0].cca3}
                currencies={manageableData[0].currencies}
                flags={manageableData[0].flags}
                languages={manageableData[0].languages}
                name={manageableData[0].name}
                population={manageableData[0].population}
                region={manageableData[0].region}
                subregion={manageableData[0].region}
                theme={theme}
                tld={manageableData[0].tld}
                capital={manageableData[0].capital}
                data={data}
              /> */}
              <Countries
                data={manageableData}
              />
            </>
            :
            <h1>No countries found</h1>
        }
      </div>
    </ThemeProvider>
    
  )
}

export default App
