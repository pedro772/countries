import axios from "axios"
import { useEffect, useState } from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Countries } from "./components/Countries";
import { Navbar } from "./components/Navbar"

interface CountryData {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
      }
    }[]
  };
  flags: {
    svg: string;
  };
  population: number;
  region: string;
  capital?: string[];
}

function App() {
  const [data, setData] = useState<CountryData[]>();
  const [theme, setTheme] = useState<string>("dark");

  async function fetchData() {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setData(res.data)
      console.log(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function toggleTheme() {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  }

  return (
    <div>
      <GlobalStyles theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {
        data &&
          <>
            <Countries
              data={data}
              theme={theme}
            />
          </>
      }
      
    </div>
  )
}

export default App
