import styled from "styled-components";

export const FilterForm = styled.form`
  display: flex;
  align-items: center;

  background-color: ${
    props => props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
  };

  width: 25vw;
  min-width: 400px;

  border-radius: 6px;
`;

export const Button = styled.button`
  color: ${
    props => props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
  };
  background-color: transparent;
  border: 0;
  cursor: pointer;

  padding: 20px 30px 20px 30px;

  :hover {
    opacity: 0.8;
    transition: ease-in-out;
  }
`;

export const SearchIcon = styled.img`
  height: 0.5rem;

  @media (min-width: 600px) {
    height: 1rem;
  }
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  padding: 20px 0;

  background-color: transparent;
  border: 0;

  font-family: "Nunito Sans";
  font-weight: 300;
  font-size: 1rem;

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