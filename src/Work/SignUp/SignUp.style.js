import styled from "@emotion/styled";
export const ButtonUp = styled.button`
  font-size: larger;
  border: 3px solid black;
  border-radius: 9px;
  cursor: pointer;
  padding: 10px;
  margin-left: 3rem;
  margin-right: 3rem;
  margin-top: 5rem;
  :hover {
    color: #fff;
    background-image: linear-gradient(
      to bottom right,
      rgb(32, 200, 255),
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #000000;
  border-radius: 10px;
  margin: 50px;
  margin-right: 20rem;
  margin-left: 20rem;
  min-height: 86vh;
  h2 {
    padding-bottom: 3rem;
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
