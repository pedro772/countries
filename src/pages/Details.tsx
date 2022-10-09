import { useContext, useState } from "react";
import { Actions } from "../components/Actions";
import { DetailedCountry } from "../components/DetailedCountry";
import DataContext from "../utils/context/data";

export function Details() {
  const { data, manageableData } = useContext(DataContext);
  const [currentScreen, setCurrentScreen] = useState<string>("MENU");

  return (
    <>
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
    </>
  )
}
