import { Container, FlagContainer, CountryName, InfoContainer, InfoHeader, InfoText, MainInfo, SecondaryInfo } from "./styles";

interface DetailedCountryProps {
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
  theme: string;
  data: CountryData[];
}

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
  borders?: string[];
  cca3: string;
}

const mainInfoHeaders = {
  0: "Native Name",
  1: "Population",
  2: "Region",
  3: "Sub Region",
  4: "Capital"
}

const secondaryInfoHeaders = {
  0: "Top Level Domain",
  1: "Currencies",
  2: "Languages",
}

export function DetailedCountry( { 
  name, 
  flags, 
  population, 
  region, 
  subregion, 
  tld, 
  currencies, 
  languages, 
  capital, 
  borders, 
  cca3, 
  theme,
  data
} : DetailedCountryProps ) {
  const nativeNameKeys: any[] = Object.keys(name.nativeName);
  const nativeName = name.nativeName[nativeNameKeys[0]].common;

  const currencyKeys: any[] = Object.keys(currencies);
  const currencyList = currencyKeys.map(currencyKey => (
    currencies[currencyKey].name
  ));
  const formattedCurrencies = currencyList?.join(", ");

  const languageKeys: any[] = Object.keys(languages);
  const languageList = languageKeys.map(languageKey => (
    languages[languageKey]
  ));
  const formattedLanguages = languageList?.join(", ");

  // Fix capital exhibition for countries with multiple capitals
  const mainInfo = [nativeName, population, region, subregion, capital && capital[0]];
  const secondaryInfo = [tld, formattedCurrencies, formattedLanguages];

  const borderCountries = borders?.map(border => {
    const borderCountry = data.find(country => country.cca3 === border);

    return borderCountry?.name.common;
  })
  const formattedBorderCountries = borderCountries?.join(", ");

  return (
    <Container>
      <FlagContainer />
      <InfoContainer>
        <CountryName />
        <MainInfo>
          {
            mainInfo.map((info: any, key : any) => (
              <InfoContainer>
                {/* @ts-ignore */}
                <InfoHeader>{mainInfoHeaders[key]}</InfoHeader>
                <InfoText>{info}</InfoText>
              </InfoContainer>
            ))
          }
        </MainInfo>
        <SecondaryInfo>
          {
            secondaryInfo.map((info: any, key : any) => (
              <InfoContainer>
                {/* @ts-ignore */}
                <InfoHeader>{secondaryInfoHeaders[key]}</InfoHeader>
                <InfoText>{info}</InfoText>
              </InfoContainer>
            ))
          }
        </SecondaryInfo>
        <InfoHeader>Borders:</InfoHeader>
        <InfoText>{borders ? formattedBorderCountries : "None"}</InfoText>
      </InfoContainer>
    </Container>
  );
}