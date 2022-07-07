import { Container } from "./styles";
import { Heading } from "./styles";
import { ThemeSwitcherButton } from "./styles";
import { ThemeSwitcherIcon } from "./styles";

export function Navbar() {
  return (
    <Container>
      <Heading>
        Where in the world?
      </Heading>
      <ThemeSwitcherButton>
        <ThemeSwitcherIcon src="/assets/moon-solid-white.svg" />
        Dark Mode
      </ThemeSwitcherButton>
    </Container>
  );
}