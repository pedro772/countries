import { useContext, ChangeEvent, FormEvent } from "react";
import { Button, FilterForm, Input, SearchIcon } from "./styles";
import UseDarkThemeContext from "../../utils/context/theme";

interface FilterProps {
  setCountry: Function;
  filter: Function;
}

export function InputFilter( { setCountry, filter } : FilterProps ) {
  const { useDarkTheme } = useContext(UseDarkThemeContext);

  function handleSubmit(e : FormEvent) {
    e.preventDefault();

    filter();
  }

  function handleChange(e : ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;

    setCountry(newValue);
  }

  return (
    <FilterForm onSubmit={handleSubmit}>
      <Button type="submit">
        <SearchIcon src={useDarkTheme ? "/assets/magnifying-glass-solid-white.svg" : "/assets/magnifying-glass-solid.svg"} />
      </Button>
      <Input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
    </FilterForm>
  );
}