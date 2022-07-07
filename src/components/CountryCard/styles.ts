import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 40vh;
  width: 10vw;
  background-color: hsl(209, 23%, 22%);

  border-radius: 4px;
`;

export const FlagContainer = styled.img`
  width: 10vw;
  object-fit: contain;

  border-radius: 4px 4px 0 0;
`

export const CountryName = styled.h3`
  margin-left: 15px;

  color: hsl(0, 0%, 100%);
  font-weight: 800;
  font-size: 1.1rem;
`;

export const InfoContainer = styled.div`
  margin-left: 15px;

  display: flex;
  width: 100%;
  align-items: center;
`

export const InfoHeader = styled.h4`
  color: hsl(0, 0%, 100%);
  font-weight: 600;
  font-size: 0.9rem;
`

export const InfoText = styled.p`
  margin-left: 2px;

  color: hsl(0, 0%, 100%);
  font-weight: 300;
  font-size: 0.9rem;
`