import { useContext } from "react";
import { Container } from "./styles";
import { Heading } from "./styles";
import { ThemeSwitcherButton } from "./styles";
import { ThemeSwitcherIcon } from "./styles";
import UseDarkThemeContext from "../../utils/context/theme"

export function Navbar() {
  const { useDarkTheme, setUseDarkTheme } = useContext(UseDarkThemeContext);

  function toggleTheme() {
    setUseDarkTheme(!useDarkTheme);
  }

  return (
    <Container>
      <Heading>
        Where in the world?
      </Heading>
      <ThemeSwitcherButton onClick={toggleTheme}>
        <ThemeSwitcherIcon src={useDarkTheme ? "/assets/moon-solid-white.svg" : "/assets/moon-solid.svg"}/>
        { useDarkTheme ? "Light Mode" : "Dark Mode" }
      </ThemeSwitcherButton>
    </Container>
  );
}