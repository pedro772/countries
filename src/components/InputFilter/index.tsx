import { ChangeEvent, FormEvent } from "react";
import { Button, FilterForm, Input, SearchIcon } from "./styles";

interface FilterProps {
  setCountry: Function;
  filter: Function;
  theme: string;
}

export function InputFilter( { setCountry, filter, theme } : FilterProps ) {
  function handleSubmit(e : FormEvent) {
    e.preventDefault();

    filter();
  }

  function handleChange(e : ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;

    setCountry(newValue);
  }

  return (
    <FilterForm onSubmit={handleSubmit} theme={theme}>
      <Button type="submit" theme={theme}>
        <SearchIcon src={theme === "dark" ? "/assets/magnifying-glass-solid-white.svg" : "/assets/magnifying-glass-solid.svg"} />
      </Button>
      <Input
        type="text"
        placeholder="Search for a country"
        onChange={handleChange}
        theme={theme}
      />
    </FilterForm>
  );
}