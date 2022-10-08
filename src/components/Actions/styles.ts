import styled from "styled-components";

export const ActionsContainer = styled.div`
  margin: calc(10vh + 30px) 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;

    align-items: flex-start;
  }
`;