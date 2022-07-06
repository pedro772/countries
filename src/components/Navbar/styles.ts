import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background-color: hsl(209, 23%, 22%);
`;

export const Heading = styled.h2`
  margin-left: 3vw;
  color: hsl(0, 0%, 100%);
  font-size: 1.3rem;
  font-weight: 800;
`;

export const ThemeSwitcher = styled.button`
  display: flex;
  align-items: center;

  margin-right: 3vw;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: hsl(0, 0%, 100%);

  font-family: "Nunito Sans";
  font-size: 1rem;
  font-weight: 300;
`

export const ThemeSwitcherIcon = styled.img`
  margin-right: 0.5rem;
  height: 1rem;
`