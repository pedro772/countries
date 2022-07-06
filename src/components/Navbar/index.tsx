import React from "react";

import { Container } from "./styles";
import { Heading } from "./styles";
import { ThemeSwitcher } from "./styles";
import { ThemeSwitcherIcon } from "./styles";

export function Navbar() {
  return (
    <Container>
      <Heading>
        Where in the world?
      </Heading>
      <ThemeSwitcher>
        <ThemeSwitcherIcon src="/assets/moon-solid-white.svg" />
        Dark Mode
      </ThemeSwitcher>
    </Container>
  );
}