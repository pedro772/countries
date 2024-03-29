import styled from "styled-components";

export const Container = styled.div`
  background-color: ${
    props => props.theme.elementColor
  };

  border-radius: 4px;
  margin: 0 30px 0;

  display: flex;
  flex-direction: column;

  height: 345px;
  width: 260px;

  @media (max-width: 375px) {
    width: 84vw;
    height: 415px;
    margin: 0 8vw 30px;
  }

  box-shadow: 0 0 8px ${
    props => props.theme.boxShadowColor
  };

  :hover {
    opacity: 0.85;
    transition: ease-in-out, 0.2s;
    cursor: pointer;
    z-index: 1;
  }
`;

export const FlagContainer = styled.img`
  height: 155px;

  @media (max-width: 375px) {
    height: 185px;
  }

  object-fit: cover;
  border-radius: 4px 4px 0 0;
`

export const CountryName = styled.h3`
  margin: 24px 0 6px 15px;

  color: ${
    props => props.theme.textColor
  };
  font-weight: 800;
  font-size: 1.2rem;
`;

export const InfoContainer = styled.div`
  margin-top: 12px;
  margin-left: 15px;
  
  display: flex;
  width: 100%;
  align-items: center;

  color: ${
    props => props.theme.textColor
  };
`

export const InfoHeader = styled.h4`
  font-weight: 600;
  font-size: 0.9rem;
`

export const InfoText = styled.p`
  margin-left: 4px;

  font-weight: 300;
  font-size: 0.9rem;
`