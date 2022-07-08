import { Container, FlagContainer, CountryName, InfoContainer, InfoHeader, InfoText } from "./styles";

interface CountryCardProps {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital?: string;
  theme: string;
}

export function CountryCard( { name, flag, population, region, capital, theme } : CountryCardProps ) {
  return (
    <Container theme={theme}>
      <FlagContainer src={flag} />
      <CountryName theme={theme}>
        {name}
      </CountryName>
      <InfoContainer theme={theme}>
        <InfoHeader>Population:</InfoHeader>
        <InfoText>{population}</InfoText>
      </InfoContainer>
      <InfoContainer theme={theme}>
        <InfoHeader>Region:</InfoHeader>
        <InfoText>{region}</InfoText>
      </InfoContainer>
      {
        capital && 
          <InfoContainer theme={theme}>
            <InfoHeader>Capital:</InfoHeader>
            <InfoText>{capital}</InfoText>
          </InfoContainer>
      }
    </Container>
  );
}