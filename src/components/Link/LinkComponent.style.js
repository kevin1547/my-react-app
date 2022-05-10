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

export const Img = ({ clickAlready, MainFunc, value }) => {
  const ImgStyle = styled.img`
    height: 5rem;
    width: 13rem;
    cursor: pointer;
    border: 2px solid #000;
    visibility: ${clickAlready ? "hidden" : "visible"};
  `;
  return <ImgStyle onClick={MainFunc} src={value} />;
};
