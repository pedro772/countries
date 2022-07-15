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
}

const mainInfoHeaders = {
  0: "Native Name",
  1: "Population",
  2: "Region",
  3: "Sub Region",
  4: "Capital"
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
  theme 
} : DetailedCountryProps ) {
  const nativeNameKeys: any[] = Object.keys(name.nativeName);
  const nativeName = name.nativeName[nativeNameKeys[0]].common;

  const currencyKeys: any[] = Object.keys(currencies);
  const currencyList = currencyKeys.map(currencyKey => (
    currencies[currencyKey.name]
  ));

  const languageKeys: any[] = Object.keys(languages);
  const languageList = languageKeys.map(languageKey => (
    languages[languageKey]
  ));

  const mainInfo = [nativeName, population, region, subregion, capital && capital[0]];
  const secondaryInfo = [tld, currencyList, languageList];

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
                <InfoHeader>{mainInfoHeaders[key]}</InfoHeader>
                <InfoText>{info}</InfoText>
              </InfoContainer>
            ))
          }
        </SecondaryInfo>
        <InfoHeader>Borders:</InfoHeader>
        <InfoText>{borders}</InfoText>
      </InfoContainer>
    </Container>
  );
}