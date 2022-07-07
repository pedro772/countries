import axios from "axios"
import { useEffect, useState } from "react";
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

  return (
    <div>
      <Navbar />
      {
        data &&
          <>
            <Countries
              data={data}
            />
          </>
      }
      
    </div>
  )
}

export default App
