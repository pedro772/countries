import { ChangeEvent, FormEvent } from "react";
import { SelectRegion ,RegionOption } from "./styles";

interface FilterProps {
  setRegion: Function;
  regionOptions: string[];
}

export function SelectFilter( { setRegion, regionOptions } : FilterProps ) {
  function handleSelect(e : ChangeEvent<HTMLSelectElement>) {
    const regionSelected = e.target.value;

    setRegion(regionSelected);
  }

  return (
    <>
      <SelectRegion name="regions" onChange={handleSelect}>
        <RegionOption value="" disabled selected hidden>Filter by Region</RegionOption>
        {
          regionOptions.map(region => (
            <RegionOption value={region}>{region}</RegionOption>
          ))
        }
      </SelectRegion>
    </>
    
  );
}