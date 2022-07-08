import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background-color: ${
    props => props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
  };

  box-shadow: 0 4px 4px ${
    props => props.theme === "dark" ? "transparent" : "#f1f1f1"
  };
`;

export const Heading = styled.h2`
  color: ${
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
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
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
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