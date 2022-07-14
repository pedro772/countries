import { InputFilter } from "../InputFilter";
import { SelectFilter } from "../SelectFilter";
import { ActionsContainer } from "./styles";

interface ActionsProps {
  currentScreen: string;
  setCountry: Function;
  setRegion: Function;
  filterByName: Function;
  regionOptions: string[];
}

export function Actions( { currentScreen, setCountry, setRegion, filterByName, regionOptions } : ActionsProps ) {

  return (
    <ActionsContainer>
      <InputFilter
        setCountry={setCountry}
        filter={filterByName}
      />
      <SelectFilter
        setRegion={setRegion}
        regionOptions={regionOptions}
      />
    </ActionsContainer>
  );
}