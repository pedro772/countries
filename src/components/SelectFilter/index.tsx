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
  <SelectRegion onChange={handleSelect} placeholder="Filter by region" theme={theme} >
      {
        regionOptions.map(region => (
          <RegionOption theme={theme}>{region}</RegionOption>
        ))
      }
    </SelectRegion>
  );
}