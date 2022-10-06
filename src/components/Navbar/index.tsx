import { Container } from "./styles";
import { Heading } from "./styles";
import { ThemeSwitcherButton } from "./styles";
import { ThemeSwitcherIcon } from "./styles";

interface NavbarProps {
  toggleTheme: any;
  useDarkTheme: boolean;
}

export function Navbar( { toggleTheme, useDarkTheme } : NavbarProps ) {
  return (
    <Container>
      <Heading>
        Where in the world?
      </Heading>
      <ThemeSwitcherButton onClick={toggleTheme}>
        <ThemeSwitcherIcon src={useDarkTheme ? "/assets/moon-solid-white.svg" : "/assets/moon-solid.svg"}/>
        Dark Mode
      </ThemeSwitcherButton>
    </Container>
  );
}