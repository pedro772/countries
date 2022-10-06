import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;

  background-color: ${
    props => props.theme.elementColor
  };

  box-shadow: 0 4px 4px ${
    props => props.theme.boxShadow
  };
`;

export const Heading = styled.h2`
  color: ${
    props => props.theme.textColor
  };

  margin-left: 3vh;
  font-size: 0.9rem;
  font-weight: 800;
  
  @media (min-width: 600px) {
    margin-left: 3vw;
    font-size: 1.3rem;
  }
`;

export const ThemeSwitcherButton = styled.button`
  display: flex;
  align-items: center;

  color: ${
    props => props.theme.textColor
  };
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-family: "Nunito Sans";
  font-weight: 300;
  
  margin-right: 3vh;
  font-size: 0.6rem;

  @media (min-width: 600px) {
    margin-left: 3vw;
    font-size: 1rem;
  }
`

export const ThemeSwitcherIcon = styled.img`
  margin-right: 0.5rem;
  height: 0.6rem;

  @media (min-width: 600px) {
    height: 1rem;
  }
`