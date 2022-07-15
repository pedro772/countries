import { ChangeEvent, FormEvent } from "react";
import { SelectRegion ,RegionOption } from "./styles";

interface FilterProps {
  setRegion: Function;
  regionOptions: string[];
  theme: string;
}

export function SelectFilter( { setRegion, regionOptions, theme } : FilterProps ) {
  function handleSelect(e : ChangeEvent<HTMLSelectElement>) {
    const regionSelected = e.target.value;

    setRegion(regionSelected);
  }

  return (
    <>
      <SelectRegion name="regions" onChange={handleSelect} theme={theme}>
        <RegionOption value="" theme={theme} disabled selected hidden>Filter by Region</RegionOption>
        {
          regionOptions.map(region => (
            <RegionOption value={region} theme={theme}>{region}</RegionOption>
          ))
        }
      </SelectRegion>
    </>
    
  );
}