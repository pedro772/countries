import styled from "styled-components";

export const Container = styled.div`
  margin: 60px 0 30px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: -30px;
  justify-content: space-between;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;