import styled from "@emotion/styled";
export const SelectBtn = styled.button`
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dropdown = styled.div`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  img {
    border: 1px solid #000;
    width: 10rem;
  }
`;
