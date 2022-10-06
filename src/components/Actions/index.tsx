import { InputFilter } from "../InputFilter";
import { SelectFilter } from "../SelectFilter";
import { ActionsContainer } from "./styles";

interface ActionsProps {
  currentScreen: string;
  setCountry: Function;
  setRegion: Function;
  filterByName: Function;
  regionOptions: string[];
  useDarkTheme: boolean;
}

export function Actions( { currentScreen, setCountry, setRegion, filterByName, regionOptions, useDarkTheme } : ActionsProps ) {

  return (
    <ActionsContainer>
      <InputFilter
        setCountry={setCountry}
        filter={filterByName}
        useDarkTheme={useDarkTheme}
      />
      <SelectFilter
        setRegion={setRegion}
        regionOptions={regionOptions}
      />
    </ActionsContainer>
  );
}