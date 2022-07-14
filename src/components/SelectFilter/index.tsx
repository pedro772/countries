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
    <SelectRegion onSelect={handleSelect} >
      {
        regionOptions.map(region => (
          <RegionOption>{region}</RegionOption>
        ))
      }
    </SelectRegion>
  );
}