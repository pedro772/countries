import styled from "styled-components";

export const Container = styled.div`
  margin: calc(10vh + 30px) 30px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${
    props => props.theme.textColor
  };
  background-color: ${
    props => props.theme.elementColor
  };
  box-shadow: 0 0 8px ${
    props => props.theme.boxShadowColor
  };

  border: none;
  border-radius: 2px;
  cursor: pointer;

  font-family: "Nunito Sans";
  font-weight: 300;
  font-size: 0.6rem;

  @media (min-width: 600px) {
    font-size: 1rem;
  }

  height: 35px;
  min-width: 120px;

  :hover {
    opacity: 0.85;
    transition: ease-in-out, 0.2s;
  }
`

export const ReturnIcon = styled.img`
  margin-right: 0.5rem;
  height: 0.6rem;

  @media (min-width: 600px) {
    height: 1rem;
  }
`