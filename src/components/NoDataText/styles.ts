import styled from "styled-components";

export const NoDataInfo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20vh;

  color: ${
    props => props.theme.textColor
  };
`;