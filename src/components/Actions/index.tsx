import { InputFilter } from "../InputFilter";
import { SelectFilter } from "../SelectFilter";
import { ActionsContainer } from "./styles";

interface ActionsProps {
  currentScreen: string;
  setCountry: Function;
  setRegion: Function;
  filterByName: Function;
  regionOptions: string[];
  theme: string;
}

export function Actions( { currentScreen, setCountry, setRegion, filterByName, regionOptions, theme } : ActionsProps ) {

  return (
    <ActionsContainer>
      <InputFilter
        setCountry={setCountry}
        filter={filterByName}
        theme={theme}
      />
      <SelectFilter
        setRegion={setRegion}
        regionOptions={regionOptions}
        theme={theme}
      />
    </ActionsContainer>
  );
}