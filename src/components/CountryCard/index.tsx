import { Container, FlagContainer, CountryName, InfoContainer, InfoHeader, InfoText } from "./styles";

interface CountryCardProps {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital?: string;
}

export function CountryCard( { name, flag, population, region, capital } : CountryCardProps ) {
  return (
    <Container>
      <FlagContainer src={flag} />
      <CountryName>
        {name}
      </CountryName>
      <InfoContainer>
        <InfoHeader>Population:</InfoHeader>
        <InfoText>{population}</InfoText>
      </InfoContainer>
      <InfoContainer>
        <InfoHeader>Region:</InfoHeader>
        <InfoText>{region}</InfoText>
      </InfoContainer>
      {
        capital && 
          <InfoContainer>
            <InfoHeader>Capital:</InfoHeader>
            <InfoText>{capital}</InfoText>
          </InfoContainer>
      }
    </Container>
  );
}