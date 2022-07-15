import styled from "styled-components";

export const SelectRegion = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  display: flex;
  align-items: center;

  background-color: ${
    props => props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
  };

  color: ${
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
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
    props => props.theme === "dark" ? `url("/assets/chevron-down-solid-white.svg")` : `url("/assets/chevron-down-solid.svg")`
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
`;

export const RegionOption = styled.option`
  -webkit-appearance: none;
  -moz-appearance: none;

  background-color: ${
    props => props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
  };

  color: ${
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
  };
`;