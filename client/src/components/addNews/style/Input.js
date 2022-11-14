import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 3px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    outline: none !important;
    border:3px solid grey;
    box-shadow: 0 0 10px grey;
}
`;

export default Input;
