import styled from "styled-components";

export const SelectRegion = styled.select`
  display: flex;
  align-items: center;

  background-color: ${
    props => props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
  };

  color: ${
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
  };

  width: 10vw;
  min-width: 200px;
  padding: 20px 0 20px;

  border: 0;
  border-radius: 6px;
`;

export const RegionOption = styled.option`
  background-color: ${
    props => props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
  };

  color: ${
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
  };
`;