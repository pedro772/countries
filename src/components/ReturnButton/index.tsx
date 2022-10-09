import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, ReturnIcon } from "./styles";
import UseDarkThemeContext from "../../utils/context/theme"
import DataContext from "../../utils/context/data";

export function ReturnButton() {
  const navigate = useNavigate();
  const { data, setManageableData } = useContext(DataContext);
  const { useDarkTheme } = useContext(UseDarkThemeContext);

  function returnToHome() {
    setManageableData(data)
    navigate("/");
  }

  return (
    <Container>
      <Button onClick={returnToHome}>
        <ReturnIcon src={useDarkTheme ? "/assets/arrow-left-long-solid-white.svg" : "/assets/arrow-left-long-solid.svg"}/>
        Back
      </Button>
    </Container>
  );
}