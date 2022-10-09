import axios from "axios"
import { useContext, useEffect, useState } from "react";
import { Countries } from "../components/Countries";
import { Actions } from "../components/Actions";
import DataContext from "../utils/context/data";

export function Home() {
  const { data, setData, manageableData, setManageableData } = useContext(DataContext);
  const [regionSelected, setRegionSelected] = useState<string>();
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [countryToFilter, setCountryToFilter] = useState<string>("");
  const [currentScreen, setCurrentScreen] = useState<string>("MENU");

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
    fetchData();
  }, []);

  return (
      <>
        <Actions
          setCountry={setCountryToFilter}
          setRegion={setRegionSelected}
          filterByName={filterByName}
          currentScreen={currentScreen}
          regionOptions={regionOptions}
          useDarkTheme={useDarkTheme}
        />
        {
          manageableData[0].name.common != "" ?
            <Countries data={manageableData} />
            :
            <h1>No countries found</h1>
        }
      </>
  )
}
