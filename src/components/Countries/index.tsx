import { Container } from "./styles";
import { CountryCard } from "../CountryCard";

interface CountriesProps {
  data: {
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
  }[];
  theme: string;
}

export function Countries( { data, theme } : CountriesProps ) {
  return (
    <Container>
      {
        data.map(country => (
          <>
            {
              country.capital ?
                <CountryCard 
                  flag={country.flags.svg} 
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital[0]}
                  theme={theme} />
                :
                <CountryCard 
                  flag={country.flags.svg} 
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  theme={theme} />
            }
          </>
          
        ))
      }
    </Container>
  );
}