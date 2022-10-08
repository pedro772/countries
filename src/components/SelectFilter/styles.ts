import styled from "styled-components";
import { blue } from "../../utils/colors";

export const SelectRegion = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  display: flex;
  align-items: center;

  background-color: ${
    props => props.theme.elementColor
  };

  color: ${
    props => props.theme.textColor
  };

  font-family: "Nunito Sans";
  font-weight: 300;
  font-size: 0.8rem;

  width: 10vw;
  min-width: 200px;
  padding: 15px 15px;

  border: 0;
  border-radius: 6px;

  background-image: ${
    props => props.theme.backgroundColor === blue[200] ? `url("/assets/chevron-down-solid-white.svg")` : `url("/assets/chevron-down-solid.svg")`
  };
  background-position: 92%;
  background-size: 0.6rem;
  background-repeat: no-repeat;

  :focus {
    outline: none;
    cursor: pointer;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 640px) {
    margin-top: 30px;
  }
`;

export const RegionOption = styled.option`
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: ${
    props => props.theme.elementColor
  };

  color: ${
    props => props.theme.textColor
  };
`;