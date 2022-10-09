import { useContext } from "react";
import { Container, FlagContainer, CountryName, InfoContainer, InfoHeader, InfoText } from "./styles";
import { useNavigate } from "react-router-dom";
import DataContext from "../../utils/context/data";
interface CountryCardProps {
  name: string;
  flag: string;
  population: number;
  region: string;
  capital?: string;
}

export function CountryCard( { name, flag, population, region, capital } : CountryCardProps ) {
  const navigate = useNavigate();
  const { manageableData, setManageableData } = useContext(DataContext);

  function showDetailedCountry() {
    const filteredData = manageableData?.filter(country => 
      country.name.common.toLowerCase() === name.toLowerCase()
    );

    setManageableData(filteredData)
    navigate("/details");
  }

  return (
    <Container onClick={showDetailedCountry}>
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