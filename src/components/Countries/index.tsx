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
  }[]
}

export function Countries( props : CountriesProps ) {
  return (
    <Container>
      {
        props.data.map(country => (
          <>
            {
              country.capital ?
                <CountryCard 
                  flag={country.flags.svg} 
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital[0]} />
                :
                <CountryCard 
                  flag={country.flags.svg} 
                  name={country.name.common}
                  population={country.population}
                  region={country.region} />
            }
          </>
          
        ))
      }
    </Container>
  );
}