import { ChangeEvent, FormEvent } from "react";
import { Button, FilterForm, Input, SearchIcon } from "./styles";

interface FilterProps {
  setCountry: Function;
  filter: Function;
}

export function InputFilter( { setCountry, filter } : FilterProps ) {
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
      <Button>
        <SearchIcon />
      </Button>
      <Input
        type="text"
        placeholder="Search for a country"
        onChange={handleChange}
      />
    </FilterForm>
  );
}