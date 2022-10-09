import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 30px 30px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: -30px;
  justify-content: flex-start;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 84vw;
  }
`;

export const FlagContainer = styled.img`
  width: 520px;
  max-height: 350px;

  @media (max-width: 640px) {
    width: 84vw;
  }

  @media ((min-width: 640px) and (max-width: 1020px)) {
    width: 280px;
  }

  object-fit: fill;
`

export const GeneralInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 500px;

  margin-left: 5vw;

  @media (max-width: 640px) {
    flex-grow: 1;
    margin-left: 0;
  }

  @media ((min-width: 640px) and (max-width: 1020px)) {
    margin-left: 20px;
  }
`;

export const DetailedInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 12px;

  display: flex;
`;

export const CountryName = styled.h3`
  margin: 30px 0 10px;

  color: ${
    props => props.theme.textColor
  };
  font-weight: 800;
  font-size: 1.2rem;
`;

export const InfoHeader = styled.h4`
  font-weight: 600;
  font-size: 0.9rem;

  color: ${
    props => props.theme.textColor
  };
`;

export const InfoText = styled.p`
  margin-left: 4px;

  font-weight: 300;
  font-size: 0.9rem;

  color: ${
    props => props.theme.textColor
  };
`;

export const BorderInfoContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 10px;
  margin-bottom: 30px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 30px;
  }
`;

export const BorderInfoHeader = styled.h4`
  margin-right: 10px;

  font-weight: 600;
  font-size: 0.9rem;

  color: ${
    props => props.theme.textColor
  };
`;

export const BorderCountryCardsContainer = styled.div`
  align-items: flex-start;

  display: flex;
  flex: 1;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;

  @media (max-width: 640px) {
    margin-top: 10px;
  }
`;

export const BorderCountryCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${
    props => props.theme.elementColor
  };
  box-shadow: 0 0 8px ${
    props => props.theme.boxShadowColor
  };

  border-radius: 1px;

  height: 30px;
  min-width: 80px;
`;

export const BorderCountryText = styled.p`
  margin: 0 10px;

  font-weight: 300;
  font-size: 0.9rem;

  color: ${
    props => props.theme.textColor
  };
`;

export const MainInfo = styled.div`
`;

export const SecondaryInfo = styled.div`
  @media (max-width: 640px) {
    margin-top: 30px;
  }
`;