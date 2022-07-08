import { Container } from "./styles";
import { Heading } from "./styles";
import { ThemeSwitcherButton } from "./styles";
import { ThemeSwitcherIcon } from "./styles";

interface NavbarProps {
  theme: string;
  toggleTheme: any;
}

export function Navbar( { theme, toggleTheme } : NavbarProps ) {
  return (
    <Container theme={theme}>
      <Heading theme={theme}>
        Where in the world?
      </Heading>
      <ThemeSwitcherButton onClick={toggleTheme} theme={theme}>
        <ThemeSwitcherIcon src={theme === "dark" ? "/assets/moon-solid-white.svg" : "/assets/moon-solid.svg"}/>
        Dark Mode
      </ThemeSwitcherButton>
    </Container>
  );
}