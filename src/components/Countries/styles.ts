import styled from "styled-components";

export const Container = styled.div`
  margin-top: calc(10vh + 30px);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-items: center;
`;