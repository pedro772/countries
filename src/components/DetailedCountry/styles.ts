import styled from "styled-components";

export const Container = styled.div`
  margin: 60px 30px 30px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: -30px;
  justify-content: flex-start;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;

export const FlagContainer = styled.img`
  width: 520px;

  @media (max-width: 375px) {
    height: 600px;
  }

  object-fit: cover;
`

export const GeneralInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-left: 10vw;
`;

export const DetailedInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

export const BorderInfoHeader = styled.h4`
  margin-right: 10px;

  font-weight: 600;
  font-size: 0.9rem;

  color: ${
    props => props.theme.textColor
  };
`;

export const BorderCountryCard = styled.div`
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: content;

  background-color: ${
    props => props.theme.elementColor
  };

  border-radius: 4px;

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
`;