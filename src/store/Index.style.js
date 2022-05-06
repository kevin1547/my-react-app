import styled from "@emotion/styled";

export const ButtonStyle = styled.button`
  border: 3px solid orange;
  border-radius: 15px;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 5px;
  background-color: transparent;
  font-size: large;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: #ffff33;
  }
`;

export const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
`;
