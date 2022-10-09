import { createContext, useState } from "react";

type CountryData = {
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

type PropsCountryData = {
  data: CountryData
  setData: React.Dispatch<React.SetStateAction<CountryData>>

  manageableData: CountryData
  setManageableData: React.Dispatch<React.SetStateAction<CountryData>>
}

const DEFAULT_VALUE = {
  data: {
    name: {
      common: "",
      nativeName: [{
        "": {
          common: ""
        }
      }]
    },
  flags: {
    svg: ""
  },
  population: 0,
  region: "",
  subregion: "",
  tld: [""],
  currencies: [{
    "": {
      name: ""
    }
  }],
  languages: {
    "": ""
  },
  capital: [""],
  borders: [""],
  cca3: ""
  },

  setData: () => {},

  manageableData: {
    name: {
      common: "",
      nativeName: [{
        "": {
          common: ""
        }
      }]
    },
  flags: {
    svg: ""
  },
  population: 0,
  region: "",
  subregion: "",
  tld: [""],
  currencies: [{
    "": {
      name: ""
    }
  }],
  languages: {
    "": ""
  },
  capital: [""],
  borders: [""],
  cca3: ""
  },

  setManageableData: () => {}
}

const DataContext = createContext<PropsCountryData>((DEFAULT_VALUE));

// @ts-ignore
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(DEFAULT_VALUE.data);
  const [manageableData, setManageableData] = useState(DEFAULT_VALUE.manageableData);

  return (
    <DataContext.Provider
      value={{
        data,
        // @ts-ignore
        setData,
        manageableData,
        // @ts-ignore
        setManageableData
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContextProvider };
export default DataContext;

