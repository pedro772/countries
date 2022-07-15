import styled from "styled-components";

export const FilterForm = styled.form`
  display: flex;
  align-items: center;

  background-color: ${
    props => props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
  };

  width: 25vw;
  min-width: 320px;

  @media (max-width: 640px) {
    min-width: 260px;
  };

  border-radius: 6px;
`;

export const Button = styled.button`
  color: ${
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
  };
  background-color: transparent;
  border: 0;
  cursor: pointer;

  padding: 15px 30px;

  @media (max-width: 640px) {
    padding: 10px 20px;
  };

  :hover {
    opacity: 0.8;
    transition: ease-in-out;
  }
`;

export const SearchIcon = styled.img`
  height: 0.7rem;

  @media (min-width: 600px) {
    height: 1rem;
  }
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  padding: 15px 0;

  background-color: transparent;
  border: 0;

  font-family: "Nunito Sans";
  font-weight: 300;
  font-size: 1rem;

  @media (max-width: 640px) {
    font-size: 0.8rem;
    padding: 10px 0;
  };

  color: ${
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
  };

  ::placeholder {
    color: ${
      props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
    };
  }

  :focus {
    outline: none;
  }
`;