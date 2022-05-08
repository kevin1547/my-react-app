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
  flex-direction: row;
  background-color: #fff;
  justify-content: space-between;
`;

export const DivTry = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 13rem;
`;
export const BtnInDivTry = styled.button`
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 5px;
  width: 13rem;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 17px;
  font-weight: 500;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  background-color: transparent;
`;

export const Div = styled.div`
  height: 0px;
  width: 0px;
`;
