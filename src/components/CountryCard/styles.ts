import styled from "styled-components";

export const Container = styled.div`
  background-color: ${
    props => props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
  };

  border-radius: 4px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;

  height: 345px;
  width: 260px;

  @media (max-width: 375px) {
    width: 84vw;
    height: 415px;
    margin: 0 8vw 30px;
  }

  box-shadow: 0 0 10px ${
    props => props.theme === "dark" ? "transparent" : "#f1f1f1"
  };
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
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
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
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
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