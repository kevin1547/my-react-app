import styled from "@emotion/styled";

export const ButtonUp = styled.button`
  font-size: larger;
  border: 3px solid black;
  border-radius: 9px;
  cursor: pointer;
  padding: 10px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 3rem;
  transition: 0.75s;
  :hover {
    color: #fff;
    background-image: linear-gradient(
      to bottom right,
      rgb(10, 300, 900),
      rgb(226, 200, 226)
    );
  }
`;

export const FormInner = styled.div`
  background-image: linear-gradient(
    to bottom left,
    rgb(226, 500, 220),
    rgb(32, 500, 255)
  );
  display: block;
  position: relative;
  width: 25rem;
  height: 30rem;
  justify-content: center;
  align-items: center;
  border: 2px solid #000000;
  border-radius: 10px;
  margin: 20px;
  min-height: 86vh;
  h2 {
    padding-bottom: 3rem;
    padding-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form-group {
    padding: 20px;
  }
  label {
    padding-right: 8rem;
    font-size: 1.2rem;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
  }
  input {
    width: 100%;
    border: 3px solid #000;
    border-radius: 5px;
    padding: 7px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AppSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonLight = styled.button`
  margin-top: 1.2rem;
  border: 3px solid #000;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
  font-size: larger;
  font-weight: 700;
  font-family: sans-serif;
`;
