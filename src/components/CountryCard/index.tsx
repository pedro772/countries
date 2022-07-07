import { Container, FlagContainer, CountryName, InfoContainer, InfoHeader, InfoText } from "./styles";

interface CountryCardProps {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital: string;
}

export function CountryCard( props : CountryCardProps ) {
  return (
    <Container>
      <FlagContainer src={props.flag} />
      <CountryName>
        {props.name}
      </CountryName>
      <InfoContainer>
        <InfoHeader>Population:</InfoHeader>
        <InfoText>{props.population}</InfoText>
      </InfoContainer>
      <InfoContainer>
        <InfoHeader>Region:</InfoHeader>
        <InfoText>{props.region}</InfoText>
      </InfoContainer>
      <InfoContainer>
        <InfoHeader>Capital:</InfoHeader>
        <InfoText>{props.capital}</InfoText>
      </InfoContainer>
      
    </Container>
  );
}